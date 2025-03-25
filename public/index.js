var balance = 0 ,Dermatology = 0 , heart = 0, Medical_examination = 0 , Dentistry = 0 , index;

for(let i=0 ; i<document.querySelectorAll(".box").length;i++){

    document.querySelectorAll(".box")[i].addEventListener("click",function(){
        document.querySelector(".form-2").style.display = "block";
        console.log("i : "+i)
        
         index = i;
       

       
    });
}




let close1 = document.querySelector("#close");
close1.addEventListener("click",function(){
    document.querySelector(".form-2").style.display = "none";

});





let balanceButton = document.querySelector(".balance-button");
balanceButton.addEventListener("click",function(){
    console.log("you clicked on balnace button")
    document.querySelector(".balance").style.display="flex";
    document.querySelector(".close-balance-window").style.display = "block"
    balanceButton.style.dsiplay = "none";


});

let close2 = document.querySelector(".close-balance-window");
close2.addEventListener("click",function(){
    console.log("you clicked on close button")

    document.querySelector(".balance").style.display="none";
    balanceButton.style.dsiplay = "block";
    close2.style.display = "none";
});





     

let pdf = document.querySelector("#pdf");
pdf.addEventListener("click",function(){
    document.querySelector(".form-2").style.display = "none";
   console.log(index);
    
    switch(index){
        case 0:
            balance+=40;
            Dermatology++;
        break;    

        case 1:
            balance+=200;
            heart++;
        break; 

        case 2:
            balance+=20;
            Medical_examination++;
        break; 

        case 3:
            balance+=80;
            Dentistry++;
        break; 
    }

    document.querySelector(".b span").textContent=balance;
    document.querySelector("#A span").textContent=Dermatology;
    document.querySelector("#B span").textContent=heart;
    document.querySelector("#C span").textContent=Medical_examination;
    document.querySelector("#D span").textContent=Dentistry;


});


