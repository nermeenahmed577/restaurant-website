let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}



window.onload=pageLoad;
function pageLoad(){
  var form =document.getElementById("form");
  form.onsubmit=validate;
}



//validate();

function validate(){
var check=true;
var fname=document.getElementById("firstname").value;
var lname=document.getElementById("lastname").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var phone=document.getElementById("phone").value;
var your=document.getElementById("your").value;
var location=document.getElementById("location").value;


if(fname=="")
{
  alert ("First name is required !");
  check=false;
  return check;
}
if(!fname.match(/^[A-Za-z]+$/))
{
alert("Only letters are allowed  in First name field");
check=false;
  return check;
}



if(lname=="")
{

  alert ("Last name is required");
  check=false;
  return check;
}
if(!lname.match(/^[A-Za-z]+$/))
{
alert("Only letters allowed  in Last name field");
check=false;
  return check;
}
if(email=="")
{
  alert ("Email is required");
  check=false;
  return check;
}
if(!email.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/))
{
alert("Email is not valid");
check=false;
  return check;
}



if(password=="")
{
  alert ("password is required");
  check=false;
  return check;
}

if(!password.match(/^(?=.*\d)(?!.* )(?=.*[a-z])(?=.*[A-Z]{1}).{8}/) || password[0]==password[0].toLowerCase())
{
    alert("Password is Not valid, It must contain 8 characters : 1 uppercase, 1 lowercase, 1 number and 1 special character at Least");
 check=false;
  return check;
}



if(phone== "")
{
  alert ("phone is required");
  check=false;
  return check;
}
if(!phone.match(/^[0-9]{11}$/))
{
alert("phone is not valid");
check=false;
  return check;
}



if(your== "")
{
  alert ('Your order is required');
  check=false;
  return check;
}
if(!your.match(/^[a-zA-Z\s]*$/))
{
alert("only letters or space allowed in order field");
check=false;
  return check;
}


if(this.radio[0].checked==false && this.radio[1].checked==false )
{
  alert ('Please Select Gender');
  check=false;
  return check;
}



if(location== "")
{
  alert ('Your location is required');
  check=false;
  return check;
}
if(!location.match(/^[a-zA-Z\s]*$/))
{
alert("only letters or space allowed in location field");
check=false;
  return check;
}



if (check==true){
alert('Thanks'+" "+fname+" "+lname+" "+'for join to us');
window.location.href='index.html';

}
return check;



}







window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

 if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

