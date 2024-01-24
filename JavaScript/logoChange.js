

let counter=1;

const logo = () => {
  const title="Tareq";
  logoTime.innerText=title.slice(0,counter++)
// to repeat the autoWriting
  if(counter> title.length)
  {
    counter=1;
  }
  // to stop the autoWriting
  // if(counter> title.length)
  // {
  //   clearInterval(stop);
  // }


}

const stop=setInterval(logo , 500);