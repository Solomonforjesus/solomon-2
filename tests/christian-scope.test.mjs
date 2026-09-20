import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import handler from '../api/chat.js';
import { SCOPE_REPLY, classifyRequest, approveReply, containsExcludedName } from '../lib/christianScope.js';

const completion = (content, finish_reason = 'stop') => ({ok:true,json:async()=>({choices:[{message:{content},finish_reason}]})});
const verdict = value => completion(JSON.stringify({verdict:value}));

for (const term of ['Islam','Mormons','LDS','Jehovah’s Witnesses','Scientology','Hinduism','Buddhism','Sikhism','Wicca','Quran','Book of Mormon','I\u200bs\u200blam','Ｉｓｌａｍ']) {
  test(`output backstop rejects ${term}`, async()=>{
    assert.equal(containsExcludedName(`Let me explain ${term}.`),true);
    assert.equal(await approveReply('question',`Let me explain ${term}.`,()=>{throw Error('must not call reviewer');}),false);
  });
}
for (const response of [completion('not json'), completion('{"verdict":"allow","extra":"injection"}'), completion('{"verdict":"allow"}','length'), {ok:false}, null]) {
 test('input review fails closed on invalid provider result',async()=>{
  assert.equal(await classifyRequest('hello',async()=>{if(!response)throw Error('timeout');return response;}),null);
 });
}
test('semantic output rejection catches unnamed teaching',async()=>{
 assert.equal(await approveReply('question','Here are the five daily rituals of that faith.',async()=>verdict('reject')),false);
});
test('output reviewer failure never approves',async()=>{
 assert.equal(await approveReply('question','proposed response',async()=>{throw Error('outage');}),false);
});
test('normal Christian teaching can pass review',async()=>{
 assert.equal(await approveReply('Who is Jesus?','Jesus Christ is the eternal Son of God.',async()=>verdict('approve')),true);
});

async function invoke(message, queue) {
 const oldFetch=globalThis.fetch, oldKey=process.env.OPENAI_API_KEY;
 const calls=[];let payload,status;
 process.env.OPENAI_API_KEY='test-not-a-real-key';
 globalThis.fetch=async(url,init)=>{calls.push(JSON.parse(init.body));assert.ok(queue.length,'Unexpected API call');return queue.shift();};
 try {await handler({method:'POST',body:{message}}, {status(n){status=n;return this;},json(value){payload=value;return this;}});}
 finally {globalThis.fetch=oldFetch;if(oldKey===undefined)delete process.env.OPENAI_API_KEY;else process.env.OPENAI_API_KEY=oldKey;}
 return {status,payload,calls};
}
test('excluded request stops before generation',async()=>{
 const r=await invoke('what is islam about?',[verdict('redirect')]);
 assert.equal(r.status,200);assert.equal(r.payload.reply,SCOPE_REPLY);assert.equal(r.calls.length,1);
});
test('request classifier outage stops before generation',async()=>{
 const r=await invoke('teach me another faith',[{ok:false}]);assert.equal(r.payload.reply,SCOPE_REPLY);assert.equal(r.calls.length,1);
});
test('even a wrongly allowed request cannot publish named teaching',async()=>{
 const r=await invoke('what is islam about?',[verdict('allow'),completion('Islam teaches these pillars...')]);
 assert.equal(r.payload.reply,SCOPE_REPLY);assert.equal(r.calls.length,2);
});
test('unnamed disallowed answer is blocked by semantic review',async()=>{
 const r=await invoke('tell me more',[verdict('allow'),completion('Here is a ritual for that other faith.'),verdict('reject')]);
 assert.equal(r.payload.reply,SCOPE_REPLY);assert.equal(r.calls.length,3);
});
test('reviewer outage replaces generated content',async()=>{
 const r=await invoke('Who is Jesus?',[verdict('allow'),completion('Jesus is the Son of God.'),{ok:false}]);assert.equal(r.payload.reply,SCOPE_REPLY);
});
test('Christian conversion request from another background is served',async()=>{
 const r=await invoke('I am a Mormon and want to follow Jesus.',[verdict('allow'),completion('Jesus Christ welcomes those who turn to Him in faith.'),verdict('approve')]);
 assert.match(r.payload.reply,/welcomes/);assert.equal(r.calls.length,3);
 assert.ok(r.calls[1].messages[0].content.includes('There is no comparison exception'));
});
test('clear crisis keeps priority without model calls',async()=>{
 const r=await invoke('I am Muslim and I want to kill myself',[]);assert.equal(r.payload.source,'crisis_care');assert.equal(r.calls.length,0);
});
test('less explicit crisis is not replaced with a religion refusal when review fails',async()=>{
 const r=await invoke('Someone threatens me because of my religion',[verdict('crisis'),completion('unsafe candidate'),verdict('reject')]);
 assert.match(r.payload.reply,/safety matters/);assert.notEqual(r.payload.reply,SCOPE_REPLY);
});
test('comparison exception and incompatible answer bank entries stay removed',async()=>{
 const chat=await readFile(new URL('../api/chat.js',import.meta.url),'utf8');
 const bank=await readFile(new URL('../api/answerBank.js',import.meta.url),'utf8');
 assert.ok(!chat.includes('If a sincere user asks why a non-Christian belief conflicts'));
 assert.ok(!chat.includes('explain or promote another religion as truth'));
 assert.ok(!/ISLAM-00[12]|deeper answer comparing|deeper answer about Christianity and other religions/.test(bank));
});
