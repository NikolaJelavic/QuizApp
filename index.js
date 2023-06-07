
const i = document.querySelector("i");
const button = document.querySelector("button");
const form = document.querySelector("form");
const article = document.querySelector("article");
const container = document.querySelector('[data-js="article"]');
const body = document.querySelector("body");

i.addEventListener("click",()=>{
  console.log("test");
  const initialClass = "fa-regular fa-bookmark";  //white  
  if (i.className.includes(initialClass)) {
    i.classList = "fa-solid fa-bookmark"      //dark
  } else {
    i.classList = initialClass;
  }
})


const show = document.querySelector('[data-js="show"]');
if (show){
    button.addEventListener("click",()=>{

      const initialText = 'Show answer';
      show.classList.toggle("hidden") 
      
      if (button.textContent.includes(initialText)) {
        button.textContent = 'Hide answer';   
      } else {
        button.textContent = initialText;
      }
      // 2nd solution 
      // const initialText = 'Show answer';
      // if (button.textContent.includes(initialText)) {
        //   button.textContent = 'Hide answer';
        //   show.innerHTML = `Some answer ${youranswer}`;
        //   show.prepend(answer);
        // } else {
          //   button.textContent = initialText;
          //   show.innerHTML = "";
          // }
        })
        
      }
      
      
// Dark mode button
const darkMode = document.querySelector('[data-js="switch"]');

darkMode.addEventListener("click",()=>{
 
  const initialClass = "darkMode";  //white  
    if (body.className.includes(initialClass)) {
      body.className = "dayMode";      //dark
    } else {
      body.className = initialClass;
    }
})

// const drunkMode = document.querySelector('[data-js="switchDrunk"]');
// const aboutMe = document.querySelector("aboutMe");

// drunkMode.addEventListener("click",()=>{
//   console.log("test");
//   const initialClass = "drunkMode";  //drunk  
//     if (body.className.includes(initialClass)) {
//       aboutMe.className = "dayMode";
//       body.className = "dayMode";      //dark
//     } else {
//       body.className = initialClass;
//       aboutMe.className = initialClass;
//     }
  
// })





