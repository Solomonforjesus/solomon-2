import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const client = html.slice(html.indexOf('    // Keep recent turns only'), html.indexOf('// ---------- Reusable site and article sharing'));
function page(responses) {
  const calls = [], input = {value:''};
  const messages = {appendChild(){},scrollHeight:0,scrollTop:0};
  const context = vm.createContext({
    document:{getElementById(id){return id==='userInput'?input:messages;},createElement(){return {};}},
    renderChatMessage(){},
    fetch:async (_url, init)=>{calls.push(JSON.parse(init.body));return {ok:true,json:async()=>responses.shift()};}
  });
  vm.runInContext(client, context);
  return {calls, async send(text){input.value=text;await context.sendMessage();}};
}
test('page sends its previous question with a short salvation follow-up',async()=>{
  const p=page([{reply:'Have you already placed your faith in Jesus, or are you still considering that step?'},{reply:'Jesus welcomes you.'}]);
  await p.send('I love Jesus, but my family might not understand.');
  await p.send('Considering, desiring, needing.');
  assert.deepEqual(p.calls[0].history,[]);
  assert.equal(p.calls[1].currentMessage,'Considering, desiring, needing.');
  assert.equal(p.calls[1].history.length,2);
  assert.match(p.calls[1].history[1].content,/still considering/);
});
test('failed answers do not erase useful context or become conversation history',async()=>{
  const p=page([{reply:'Would you like to trust Jesus?'},{error:'Temporary problem'},{reply:'Jesus welcomes you.'}]);
  await p.send('Who is Jesus?');await p.send('Yes');await p.send('Yes, please');
  assert.equal(p.calls[2].history.length,2);
  assert.equal(p.calls[2].history[0].content,'Who is Jesus?');
});
test('page histories stay bounded and isolated between visitors',async()=>{
  const p=page(Array.from({length:7},()=>({reply:'a'.repeat(1500)})));
  for(let i=0;i<7;i++) await p.send('Question '+i);
  for(const call of p.calls) {assert.ok(call.history.length<=8);assert.ok(call.history.reduce((n,t)=>n+t.content.length,0)<=8000);}
  const other=page([{reply:'Hello'}]);await other.send('Hello');assert.deepEqual(other.calls[0].history,[]);
});
