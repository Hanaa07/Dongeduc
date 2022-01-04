const cookieContainer=document.querySelector(".cookie-container");
const cookieButton=document.querySelector(".cookie-btn");
cookieButton.addEventListener("click",() => {
    cookieContainer.classList.remove("active"); 
    document.cookie="dongeduc=true";
 });
setTimeout(() => {
    if(!document.cookie=="dongeduc=true") {
     cookieContainer.classList.add("active");}
   }, 2000);
 
