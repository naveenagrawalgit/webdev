var crsr = document.querySelector("#cursor")
var blrcrsr =document.querySelector("#cursorblur")

document.addEventListener("mousemove",function(dets) {
    crsr.style.left = dets.x -10 + "px"
    crsr.style.top = dets.y -10 + "px"
    blrcrsr.style.left =dets.x -100 + "px"
    blrcrsr.style.top =dets.y -100 + "px"
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale =3
        crsr.style.border ="1px solid #fff"
        crsr.style.backgroundColor ="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale =1
        crsr.style.border ="0px solid #95c11e"
        crsr.style.backgroundColor ="#95c11e"
    })
})

gsap.to("#nav",{
    backgroundColor :"#000",
    duration:0.5,
    heigth:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub: 2,
    }
})
gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -100%",
        scrub :2,
        
    }

})
gsap.from ("#about-us img,#about-us-in", {
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:
    { 
     trigger :"#about-us",
     scroller: "body",
     start: "top 60%",
     end: "top 55%",
     scrub: 3
    }
})
gsap.from (".card", {
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:
    { 
     trigger :".card",
     scroller: "body",
     start: "top 70%",
     end: "top 65%",
     scrub: 1
    }
})
gsap.from("#colon1",{
    y: -70,
    x:-70,
    scrollTrigger:{
        trigger:"colon1",
        scroller:"body",
        start: "top 55%",
        end:"45%",
        scrub:3
    }
})
gsap.from("page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"page4 h1",
        scroller:"body",
        start: "top 75%",
        end:"70%",
        scrub:3
    }
})