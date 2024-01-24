const btnchangequotes = document.getElementById("btnchangequotes");
let c=0;

btnchangequotes.addEventListener("click",(eo) => {
  const quotesArr=[
  `<blockquote id="qsidekick" class="sidekick">
  I don't know what I'm doing but it's working!  <br>
  <cite>Tareq Abu Al-Haijaa</cite>`,
  `<blockquote id="qsidekick" class="sidekick">
  Computers are useless. They can only give you answers.  <br>
  <cite>Tareq Abu Al-Haijaa</cite>`,
  `<blockquote id="qsidekick" class="sidekick">
  The purpose of computing is insight, not numbers and computation  <br>
  <cite>Tareq Abu Al-Haijaa</cite>`,
  `<blockquote id="qsidekick" class="sidekick">
  some things are undeniable  <br>
  <cite>Tareq Abu Al-Haijaa</cite>`,
  `<blockquote id="qsidekick" class="sidekick">
  give me my space I'm intergalactic  <br>
  <cite>Tareq Abu Al-Haijaa</cite>`,
  `<blockquote id="qsidekick" class="sidekick">
  Stay focused on your goals    <br>
  <cite>Tareq Abu Al-Haijaa</cite>`,
  `<blockquote id="qsidekick" class="sidekick">
  Things still break but i don’t break with them <br>
  <cite>Tareq Abu Al-Haijaa</cite>`,
  `<blockquote id="qsidekick" class="sidekick">
  The function of good software is to make the complex appear to be simple
  <br>
  <cite>Tareq Abu Al-Haijaa</cite>`,
];


  containeriframe.innerHTML=quotesArr[c++];
if(c==quotesArr.length)
{
  c=0;
}
})