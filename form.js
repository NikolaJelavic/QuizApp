

form.addEventListener("submit",(e)=>{
  e.preventDefault();
        
  const formElements = e.target.elements;
  const questionVal = formElements.question.value;
  const answerVal = formElements.answer.value;
  const tagVal = formElements.tag.value;
  
  const article = document.createElement("article");
  article.classList.add("articleCenter");
  const bookmark = document.createElement("i");
  bookmark.classList.add("fa-regular", "fa-bookmark");
  const header = document.createElement("h2");
  const button = document.createElement("button");
  button.innerText = "Show answer";
  const answer = document.createElement("div");
  answer.classList.add("card--answer");
  answer.classList.add("hidden")
  const tags_container = document.createElement("ul");
  
  const tags = document.createElement("li");
  tags_container.classList.add("tags");
  
  header.textContent = questionVal;
  answer.textContent = answerVal;
  tags.textContent = tagVal;
  
  body.append(article);
  article.append(bookmark, header, button, answer, tags_container);
  tags_container.append(tags); 

  
  form.reset();
});




// const questionElement = document.querySelector('[data-js="personalMessage"]');
// const amountLeft = document.querySelector('[data-js="amountLeft"]');
// const maxLength = questionElement.getAttribute("maxlength");

const questionCounter = document.querySelector('[data-js="textareaQuestion"]');
const answerCounter = document.querySelector('[data-js="textareaAnswer"]');
const amountLeftQ = document.querySelector('[data-js="amountLeftQuestion"]');
const amountLeftA = document.querySelector('[data-js="amountLeftAnswer"]');

const maxLengthQ = questionCounter.getAttribute("maxlength"); 
const maxLengthA = answerCounter.getAttribute("maxlength");

const updateAmountLeftQ = (value) => {
  amountLeftQ.innerText = value; 

};
const updateAmountLeftA = (value) => { 
    amountLeftA.innerText = value; 
  };

updateAmountLeftQ(maxLengthQ);
updateAmountLeftA(maxLengthA); 

questionCounter.addEventListener("input", () => {
  updateAmountLeftQ(maxLengthQ - questionCounter.value.length);
});
answerCounter.addEventListener("input", () => {
    updateAmountLeftA(maxLengthA - answerCounter.value.length);
  });