
let html1 = document.querySelector('html');
html1.setAttribute('lang',"ru");

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let title = document.createElement('title');
title.innerHTML='Call_to_Action';
document.head.appendChild(title);


let h1 = document.createElement('h1');
h1.innerHTML='Choose Your Option';
document.body.insertBefore(h1, document.querySelector('script'));

let p=document.createElement('p');
p.innerHTML='But I must explain to you how all this mistaken idea of denouncing ';
p.classList.add('header')
document.body.appendChild(p);

let div = document.createElement('div');
div.classList.add('wrapper')
document.body.appendChild(div);

let div1 = document.createElement('div');
div1.classList.add('first');
div.appendChild(div1);

let span1=document.createElement('span');
span1.innerHTML='FREELANCER';
span1.classList.add('span1')
div1.appendChild(span1);

let h2=document.createElement('h2');
h2.innerHTML='Initially designed to';
h2.classList.add('title1')
div1.appendChild(h2);

let p1=document.createElement('p');
p1.innerHTML='But I must explain to you how all this mistaken idea of denouncing';
p1.classList.add('subtitle1')
div1.appendChild(p1);

let btn=document.createElement('button');
btn.innerHTML='START HERE';
btn.classList.add('btn1')
div1.appendChild(btn);

let div2 = document.createElement('div');
div2.classList.add('second');
div.appendChild(div2);

let span2=document.createElement('span');
span2.innerHTML='STUDIO';
span2.classList.add('span2')
div2.appendChild(span2);

let h2Clone=h2.cloneNode(true);
h2Clone.classList.add('title2')
div2.appendChild(h2Clone);

let p1Clone=p1.cloneNode(true);
p1Clone.classList.add('subtitle2')
div2.appendChild(p1Clone);

let btnClone=btn.cloneNode(true);
btnClone.classList.add('btn2')
div2.appendChild(btnClone);

let style = document.createElement('style');
style.innerHTML=`
    *{
        padding: 0;
        margin: 0;
    }
    body{
        width:80%;
        margin:0 auto;
        font-family: Arial;
        text-align: center;
        font-size: 12px;
    }
    h1{
        font-size: 36px;
        font-weight: normal;
        padding-top: 65px;
    }
    .header{
        font-size: 10px;
        color:#9FA3A7;
        padding-top: 10px;
        padding-bottom: 70px;
    }
    .wrapper{
        display: flex;
        justify-content:center;
        margin-bottom: 70px;
    }
    .first{
        border: 1px solid #C4C4C4;
        border-radius: 10px 0 0 10px;
        width: 35%;
    }
    .span1{
        display: inline-block;
        font-weight: bold;
        color:#9FA3A7;
        padding-top: 80px;
        padding-bottom: 19px;
        text-transform:uppercase;
        letter-spacing: 2px;
    }
    .title1{
        font-family: Georgia;
        font-size: 36px;
        color: #12121;
        padding-bottom: 25px;
        font-weight: normal;
        margin: 0 auto;
        width: 60%;
    }
    .subtitle1{
        color:#9FA3A7;
        padding-bottom: 60px;
        width: 60%;
        margin: 0 auto;
        line-height: 22px;
    }
    .btn1{
        font-weight: bold;
        text-transform:uppercase;
        margin-bottom: 80px;
        padding: 16px 32px;
        letter-spacing: 2.4px;
        border: 3px solid #FFC80A;
        border-radius: 40px;
        background-color: transparent;
        cursor:	pointer;
    }
    .btn1:hover{
        box-shadow:0 0 20px #9FA3A7;
    }
    .span2{
        display: inline-block;
        font-weight: bold;
        color:#FFC80A;
        padding-top: 80px;
        padding-bottom: 19px;
        text-transform:uppercase;
        letter-spacing: 2px;
    }
    .second{
        background-color: #8F75BE;
        border-radius: 0 10px 10px 0;
        width: 35%;
    }
   .span2{
        color:#FFC80A;
    }
   .subtitle2, .btn2{
        color:#fff;  
    }
`;

document.head.appendChild(style);

