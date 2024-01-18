// to open menu
const menu=document.querySelector(".menu");
const menuOpenBtn=document.querySelector(".menuOpenBtn");
menuOpenBtn.addEventListener('click',()=>{
    menu.style.height='100vh';
})

// to close menu---------------------------->>>>>>>>
const menuCloseBtn=document.querySelector(".menuCloseBtn");
menuCloseBtn.addEventListener('click',()=>{
    menu.style.height='0vh';
})

//next quote---------------------------->>>>>>>>>>>>
const quote=document.querySelector(".quote");
const nextQuoteBtn=document.querySelector(".nextQuoteBtn");
nextQuoteBtn.addEventListener("click",quoteChange);
function quoteChange(){
    fetch("https://api.quotable.io/random?maxLength=100")
    .then(response=> response.json())
    .then(data=> {
        quote.innerHTML= `" ${data.content}"`
    })
}

//designing next quote button------------------->>>>>>>>
nextQuoteBtn.addEventListener("click",change);
function revert(){
    nextQuoteBtn.style.backgroundColor="rgb(32, 139, 127)";
    nextQuoteBtn.style.color="white";
}
function change(){
    nextQuoteBtn.style.backgroundColor="black";
    nextQuoteBtn.style.color="rgb(32, 139, 127)";
    setTimeout(revert,400);
    // revert();
}

//ultra navbar lol-------------------->>>>>>>>>>>>>>
const navbar=document.querySelector(".navbar");
var lastScroll=0;
var scrollTop=0;
window.addEventListener("scroll",()=>{
    scrollTop=window.pageYOffset;
    // console.log(scrollTop);              //use this to get scroll info
    if(scrollTop > lastScroll){
        navbar.style.top="-7vh";
    }
    else{
        navbar.style.top="0vh";
    }
    lastScroll = scrollTop;

})
window.addEventListener("scroll",()=>{
    var top=window.pageYOffset;
    if(top!=0){
        navbar.style.backgroundColor="rgb(13, 53, 48)";
    }
    else{
        navbar.style.background="none";
    }
})

//reveal on scroll-------------------->>>>>>>>>>>>
const hi=document.querySelector(".hi");
const iam=document.querySelector(".iam");
const priyanshu=document.querySelector(".priyanshu");
const content=document.querySelector(".content");

window.addEventListener("scroll",()=>{
    if(scrollTop > 300){
        hi.style.transform = 'translateY(0)';
        hi.style.opacity = '1';
        iam.style.transform = 'translateY(0)';
        iam.style.opacity = '1';
    }
})
window.addEventListener("scroll",()=>{
    if(scrollTop>350){
        priyanshu.style.transform = 'translateY(0)';
        priyanshu.style.opacity = '1';
    }
})
window.addEventListener("scroll",()=>{
    if(scrollTop>400){
        content.style.transform = 'translateY(0)';
        content.style.opacity = '1';
    }
})


// autoscroller---------------------------->>>>>>>>>>>>>>>>>
// window.addEventListener("click",()=>{
//     window.scrollBy(0,5000);
// })


//My skills page----------------------------->>>>>>>>>>>>>>>
const mySkills = document.querySelector(".mySkills");
const langs = document.querySelector(".langs");
const C = document.querySelector("#C");
const Cpp = document.querySelector("#Cpp");
const Python = document.querySelector("#Python");
const HTML = document.querySelector("#HTML");
const CSS = document.querySelector("#CSS");
const JavaScript = document.querySelector("#JavaScript");


window.addEventListener("scroll",()=>{
    if(scrollTop >1100){
        mySkills.style.transform = "translateY(0)";
        mySkills.style.opacity = "1";
    }
    if(scrollTop >1150){
        langs.style.transform = "translateX(0)";
        langs.style.opacity = "1";
        C.style.width = "90%";
        Cpp.style.width = "50%";
        Python.style.width = "85%";
        HTML.style.width = "75%";
        CSS.style.width = "60%";
        JavaScript.style.width = "65%";
        
    }
})



