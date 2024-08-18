// nav bar
document.addEventListener('DOMContentLoaded', function() {
    const hoverEffects = document.querySelectorAll('.hoverEffect');

    hoverEffects.forEach(hover => {
        hover.addEventListener('mouseenter', function() {
            gsap.to(hover, {
                scale: 1.2,
                borderRadius:27,
                color:"#000000",
                duration: 0.3,
                backgroundColor: "8fccb8",
                ease: "power2.inOut"
            });
        });

        hover.addEventListener('mouseleave', function() {
            gsap.to(hover, {
                scale: 1,
                duration: 0.3,
                backgroundColor: "transparent",
                ease: "power2.inOut"
            });
        });
    });
});
// home page
document.addEventListener('DOMContentLoaded', function(){
    let content=this.document.querySelectorAll(".text");
})
gsap.to(content, {
    scrollTrigger:{
         Trigger:".text",
         duration:1,
         pin:true,
         scrub:true,
         stragger:0.5,
         yoyo:true
    }
})
// about page script
function resumeOpener(){
    window.open("Resume.html",'_blank');
}

// contact page
