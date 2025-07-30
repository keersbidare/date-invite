document.getElementById("yesbtn").addEventListener("click",function(){


    window.location.href = "page2.html";

})

document.getElementById("nobtn").addEventListener("click",function(){
    this.remove();
    let yesbtn = document.getElementById("yesbtn");
    yesbtn.style.left = '70%'
    yesbtn.style.transform = 'translate(-50%, -50%)';
    yesbtn.style.padding = '24px 65px';  
    yesBtn.style.fontSize = '40px';
    
})