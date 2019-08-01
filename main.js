userData = [
    userdata1,
    userdata2,
    userdata3,
    userdata4,
    userdata5,
    userdata6,
    userdata7,
    userdata8,
    userdata9,
    userdata10
];
let userNumber = Math.floor(Math.random()*10);
let userResult = userData[userNumber].results[0];
document.getElementById("userName").innerText = userResult.name.first + " " + userResult.name.last;
document.getElementById("mailName").innerText = userResult.email;
document.getElementById("birthdayName").innerText = userResult.dob.date;
document.getElementById("addressName").innerText = userResult.location.street;
document.getElementById("phoneName").innerText = userResult.cell;
document.getElementById("passwordName").innerText = userResult.login.password;
document.getElementById("userImage").src = userResult.picture.large;

let userText = document.getElementById("userText");
let mailText = document.getElementById("mailText");
let birthdayText = document.getElementById("birthdayText");
let addressText = document.getElementById("addressText");
let phoneText = document.getElementById("phoneText");
let passwordText = document.getElementById("passwordText");

let user = document.getElementById("user");
let mail = document.getElementById("mail");
let birthday = document.getElementById("birthday");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
let password = document.getElementById("password");

function userClick(event){
    event.preventDefault();
    userText.style.display = "block";
    mailText.style.display = "none";
    birthdayText.style.display = "none";
    addressText.style.display = "none";
    phoneText.style.display = "none";
    passwordText.style.display = "none";
    user.style.color = "#0892d0";
    mail.style.color = "whitesmoke";
    birthday.style.color = "whitesmoke";
    address.style.color = "whitesmoke";
    phone.style.color = "whitesmoke";
    password.style.color = "whitesmoke";
}

function mailClick(event){
    event.preventDefault();
    userText.style.display = "none";
    mailText.style.display = "block";
    birthdayText.style.display = "none";
    addressText.style.display = "none";
    phoneText.style.display = "none";
    passwordText.style.display = "none";
    user.style.color = "whitesmoke";
    mail.style.color = "#0892d0";
    birthday.style.color = "whitesmoke";
    address.style.color = "whitesmoke";
    phone.style.color = "whitesmoke";
    password.style.color = "whitesmoke";
}

function birthdayClick(event){
    event.preventDefault();
    userText.style.display = "none";
    mailText.style.display = "none";
    birthdayText.style.display = "block";
    addressText.style.display = "none";
    phoneText.style.display = "none";
    passwordText.style.display = "none";
    user.style.color = "whitesmoke";
    mail.style.color = "whitesmoke";
    birthday.style.color = "#0892d0";
    address.style.color = "whitesmoke";
    phone.style.color = "whitesmoke";
    password.style.color = "whitesmoke";
}

function addressClick(event){
    event.preventDefault();
    userText.style.display = "none";
    mailText.style.display = "none";
    birthdayText.style.display = "none";
    addressText.style.display = "block";
    phoneText.style.display = "none";
    passwordText.style.display = "none";
    user.style.color = "whitesmoke";
    mail.style.color = "whitesmoke";
    birthday.style.color = "whitesmoke";
    address.style.color = "#0892d0";
    phone.style.color = "whitesmoke";
    password.style.color = "whitesmoke";
}

function phoneClick(event){
    event.preventDefault();
    userText.style.display = "none";
    mailText.style.display = "none";
    birthdayText.style.display = "none";
    addressText.style.display = "none";
    phoneText.style.display = "block";
    passwordText.style.display = "none";
    user.style.color = "whitesmoke";
    mail.style.color = "whitesmoke";
    birthday.style.color = "whitesmoke";
    address.style.color = "whitesmoke";
    phone.style.color = "#0892d0";
    password.style.color = "whitesmoke";
}

function passwordClick(event){
    event.preventDefault();
    userText.style.display = "none";
    mailText.style.display = "none";
    birthdayText.style.display = "none";
    addressText.style.display = "none";
    phoneText.style.display = "none";
    passwordText.style.display = "block";
    user.style.color = "whitesmoke";
    mail.style.color = "whitesmoke";
    birthday.style.color = "whitesmoke";
    address.style.color = "whitesmoke";
    phone.style.color = "whitesmoke";
    password.style.color = "#0892d0";
}

user.addEventListener('click', userClick);
mail.addEventListener('click', mailClick);
birthday.addEventListener('click', birthdayClick);
address.addEventListener('click', addressClick);
phone.addEventListener('click', phoneClick);
password.addEventListener('click', passwordClick);

function reset(){
    location.reload();
}
document.getElementById("userImage").addEventListener('click', reset);