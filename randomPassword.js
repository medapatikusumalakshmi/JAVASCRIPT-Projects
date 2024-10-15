const pswrdBox=document.getElementById("password")
const length=8;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&";

const allSym = upperCase+lowerCase+number+symbol;

function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password += allSym[Math.floor(Math.random()*allSym.length)]
    }
    pswrdBox.value=password;
    }


    function copyPswrd(){
        pswrdBox.select();
        document.execCommand("copy");
    }