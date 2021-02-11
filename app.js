
var xnum;
var ynum;
var znum;
//////////add number
var addnumbtn=document.querySelector('.addnumbtn');

//counter
var clicks = 0;

function counter() {
  clicks = clicks+1;
  document.querySelector('.counter').value = clicks;
};
//end counter

addnumbtn.addEventListener("keyup", enterbtn);

function enterbtn(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('.addnumbtn').click();
   }
 }


 addnumbtn.addEventListener('click',addanumber);









 












var myArray=[];

function addanumber(){
     var newnum=document.querySelector('.inputnum').value;
     newnum=Number(newnum);
     if (newnum>45 || newnum<3){
      alert("your number sould be between 3 and 45")
         }
     else{
         myArray.push(newnum);
         }
         
console.log(myArray)
console.log(typeof myArray)
console.log(typeof newnum)
//show the numbers
demo()
function demo(){
const demonumbers=document.querySelector(".demonumbers");
demonumbers.innerHTML=myArray;
}
 //clean the input
 addnumbtn=addEventListener("click",cleaninput);

 function cleaninput() {
//  alert("hey")
    document.querySelector('.inputnum').value = "hey";
 };
 //end cleaning the input
}




//add the goal
// myArray=[3,4,5,6,7,8,9,10,11,12,13,14,15];

var entergoalnumber=document.querySelector('.goalnumbtn');
entergoalnumber.addEventListener('click',addgoal);
// randomaray();
function addgoal(){
console.log(myArray)
    
let goalnum=document.querySelector('.inputgoal').value;
goalnum=Number(goalnum);
let sum=goalnum;
 randomaray ();
function randomaray (){
 xnum = myArray[Math.floor(Math.random()*myArray.length)];
//   console.log(xnum);
  ynum = myArray[Math.floor(Math.random()*myArray.length)];
//   console.log(ynum);
   znum = myArray[Math.floor(Math.random()*myArray.length)];
//   console.log(znum);
 sum=xnum+ynum+znum
 while(sum!=goalnum){
    randomaray();   
}
}






demogoal()
function demogoal(){
    
const demonumbers=document.querySelector(".demogoal");
demonumbers.innerHTML=`${xnum}+${ynum}+${znum}=${sum}`;
}
}
window.onerror = function(msg, url, linenumber) {
    // alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    alert("you can not choose this number because it is too small or too big")
    return true;
}
