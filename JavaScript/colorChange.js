
const hid = document.getElementById("hiddenul");
const changeclr = document.getElementById("changeclr");
const changeclrcards = document.getElementById("changeclrcards");

// when hover on HEADER => change-color
{changeclr.addEventListener("mousemove", (eo) => {
  hid.style.display = "block";
});

changeclr.addEventListener("mouseout", (eo) => {
  hid.style.display = "none";
});}

// for change background-color => HEADER for selected color
{lighttheme.addEventListener("click", (eo) => {
  header.style.backgroundColor = "#EEDD82";
});
goldtheme.addEventListener("click", (eo) => {
  header.style.backgroundColor = "darkslategray";
});
darktheme.addEventListener("click", (eo) => {
  header.style.backgroundColor = "black";
});
bluetheme.addEventListener("click", (eo) => {
  header.style.backgroundColor = "#00008b";
});}

// for change color randomly from the icon color
{clrtheme.addEventListener("click",(eo) => {
  let random1=Math.round(Math.random()*360);
  let random2=Math.round(Math.random()*100);
  let random3=Math.round(Math.random()*100);
  header.style.backgroundColor=`hsl(${random1}, ${random2}%,${random3}%)`;
})}

 // for bottom border color in the drop-down menu owns by change-color
{if(lighttheme.addEventListener("mousemove", (eo) => {
  lighttheme.style.borderBottom = "2px solid #EEDD82"; 
}));
else if(goldtheme.addEventListener("mousemove", (eo) => {
  goldtheme.style.borderBottom= "2px solid darkslategray";
}));
else if(darktheme.addEventListener("mousemove", (eo) => {
  darktheme.style.borderBottom = "2px solid black";
}));
else if(bluetheme.addEventListener("mousemove", (eo) => {
  bluetheme.style.borderBottom = "2px solid #00008b";
}));

if(lighttheme.addEventListener("mouseout", (eo) => {
  lighttheme.style.borderBottom = "none"; 
}));
else if(goldtheme.addEventListener("mouseout", (eo) => {
  goldtheme.style.borderBottom= "none";
}));
else if(darktheme.addEventListener("mouseout", (eo) => {
  darktheme.style.borderBottom = "none";
}));
else if(bluetheme.addEventListener("mouseout", (eo) => {
  bluetheme.style.borderBottom = "none";
}));}

// random color
const colors = () => {
  let random1=Math.round(Math.random()*225);
  let random2=Math.round(Math.random()*225);
  let random3=Math.round(Math.random()*225);
  return `rgb(${random1},${random2},${random3})`; 
}
// change color cards
changeclrcards.addEventListener("click",(eo) => {
  const cards=document.querySelectorAll(".card:not(#services > div > div:nth-child(3))");
  cards.forEach(item => {
    item.style.backgroundColor=colors();
  })  
})






