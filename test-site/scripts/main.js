/*----------------------------------------------------  | 
    Adding a personalized welcome message: WebStorageAPI|
  ----------------------------------------------------  |*/ 
//******************************************************|*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null){
        alert('I need your name, please!')
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Web Dev is so cool, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Web Dev is so cool, ' + storedName;
}

//Code for OnClick event for the button
myButton.onclick = function(){
    setUserName();
}
//******************************************************|*/

/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello Visitor!!';
    */

//******************************************************|*/
/*Simple greeting using alert()
    */
let myGreeting = 'Glad, to see you here!!';
if (myGreeting){
    alert(myGreeting);
}
//******************************************************|*/


/*----------------------------------------------------  | 
    Adding an image changer : using DOM API features    |
  ----------------------------------------------------  |*/ 
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    let myAltText = myImage.getAttribute('alt')
    if(myAltText === 'ProfilePicture'){
        //alert('Changing ...')
        if (mySrc === 'images/DP-Pic1S.jpg'){
            alert('Changing ...2s')
            myImage.setAttribute('src','images/DP-Pic2S.jpg');
        }else if(mySrc === 'images/DP-Pic2S.jpg'){
            alert('Changing ...2L')
            myImage.setAttribute('src','images/DP-Pic2L.jpg');
        }else{
            alert('Changing ...1s')
            myImage.setAttribute('src','images/DP-Pic1S.jpg');
        }
    }
}


document.querySelector('html').onclick = function() {
    alert("Ouch! Stop poking me, I'm(site) under construction !!");}
