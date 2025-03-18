let buttonEye = document.querySelector(".eyeTest");
let buttonHear = document.querySelector(".hearingTest");
let buttonBreath = document.querySelector(".breathingTest");

//onClick eyetest button
buttonEye.addEventListener("click",function(){
    window.location.href = "eyeG.html";
    }
)

//onClick hearing test button
buttonHear.addEventListener("click",function(){
    window.location.href = "hearG.html";
    }
)

//onclick breathing test button
buttonBreath.addEventListener("click",function(){
    window.location.href = "breathG.html";
    }
)