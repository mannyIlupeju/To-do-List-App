// Generating quotes & Date

var quotes = $(".quoteText");
var dates = $(".dates");

var quotes = [
'We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein',
'When you change your thoughts, remember to also change your world. —Norman Vincent Peale',
'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson',
'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together. —Diane McLaren',
'It is better to fail in originality than to succeed in imitation. — Herman Melville',
'Success usually comes to those who are too busy looking for it. — Henry David Thoreau',
'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. — Steve Jobs',
'To know how much there is to know is the beginning of learning to live. —Dorothy West'
]

function newQuote(){
  var randomQuote = Math.floor(Math.random()* quotes.length);
  $(".quoteText").text(quotes[randomQuote]);
}
newQuote();


//Date
var dateTime = new Date();
var strDate = dateTime.toDateString();

function displayDate(){
$(".dates").text(strDate);
}
displayDate()


//----------------------------------------------------------------// 
//Generating Dynamic lists
//when user clicks submit
let btn = document.getElementById("submit");
let txt = document.getElementById("todo");
let ul = document.getElementById("ul");






// //When user clicks SUBMIT
btn.addEventListener("click", function(){
  if(txt.value != ""){
    inputEntry();
  } else if(txt.value === ""){
    alert("please add note");
  }
})

// // //when user clicks ENTER
todo.addEventListener("keypress", function(e){
  if(txt.value != "" && e.code === "Enter"){
    inputEntry()
    
  } else if(txt.value === "" && e.code === "Enter"){
    alert("please add note");
  }
})




//----------------------------------------------------------------// 
//Function to create list 
function inputEntry() {
  let list = document.createElement("li");
  // list.innerHTML = textVal;
  list.setAttribute("class", "item");
  ul.appendChild(list);


  //Value of input text entry
  let textVal = txt.value;
  function clearText(){
    txt.value="";
  }
  clearText();

  
  
 
  //----------------------------------------------------------------// 
  //create input element for selecting task and span item for icons.
  //Each list element form a nodelist which is a kind of array we can use. 
  var itemList = document.querySelectorAll(".item") 
  console.log(itemList);

 //create dynamic Id
  for(let i = 0; i < itemList.length; i++){
    var id = i;
    console.log(id);
  }

 //Create input element with dynamic Id
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class","check");
  input.setAttribute("id", id)
  
  list.prepend(input)


  //----------------------------------------------------------------// 
  //create Text
  
  let textSpace = document.createElement("span");

  textSpace.setAttribute("class", "toDo");
  textSpace.innerHTML = textVal;
  list.append(textSpace)



 //----------------------------------------------------------------// 
  //trashcan icon
  let trash = document.createElement("span");
  trash.setAttribute("class", "fa-solid fa-trash-can");
  trash.setAttribute("id", "trashId" + id)
  list.append(trash)

  //trash functionality
  // listId.addEventListener("click", trashIcon)

  
  //Function to delete a generated List when TrashIcon is clicked
  
  





 //----------------------------------------------------------------// 
 //Check Button functionality
 
  // var checkButton = document.querySelector('input.check');
  var listId= document.getElementById(id);
  listId.addEventListener("click", checkbox);
  
  
 
   
  function checkbox(e){
  if(e.target.checked) {
    console.log(e);
   list.classList.add("marked")
  } else if(e.target.checked == false){
    console.log("checkbox unchecked");
    list.classList.remove("marked")
  }
  }



  
  

  


  



 

  
  

  

}
  






