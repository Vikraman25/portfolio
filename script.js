function contact(){
     window.location.href="contact.html";
}
function home(){
     window.location.href="index.html";
}
function about(){
     window.location.href="about.html";
}
function portfolio(){
     window.location.href="portfolio.html";
}
function menu(){
     const menu=document.querySelector("#nav1");
     
     menu.classList.toggle("showmenu");

}
function log(){
          
     const name=document.querySelector("#con-form1").value;
     const name1=document.querySelector("#con-form2").value;
          if(name,name1){

               const text1=document.querySelector("#alert1");
               text1.classList.add('show');
          }
          if (name,name1 == ""){
               const text2=document.querySelector("#alert2");
               text2.classList.add('show');
          }
         
     
    
    
}