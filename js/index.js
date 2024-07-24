let navWidth= $(".ul-nav").innerWidth();
$(".nav").animate({left:-navWidth},500);


$(".open-nav").click(function(){
    $(".nav").animate({left:0},300)
    $(".open-nav").animate({left:navWidth},300)
  
})

$(".close-nav").click(function(){
    $(".nav").animate({left:-navWidth},300)
    $(".open-nav").animate({left:0},300)
})



$(".nav-item a").click(function(e){
    let targetSection =$(e.target).attr("href")
    let sectionoffset=$(targetSection).offset().top
    $("body,html").animate({scrollTop:sectionoffset},3000)
   
})

// start accordion section

$(".singerList p").eq(0).slideDown(300)

$(".singer h2").click(function(e){
    $(e.target).siblings().slideDown(300)
    $(".singerList p").not($(e.target).siblings()).slideUp(300)

})


// start countDown section
let eventDate ="october 22, 2030 23:55:10"
let countDownDate=new Date(eventDate).getTime()
let x=setInterval(function(){
    nowTime = new Date().getTime()
    let distance = countDownDate - nowTime;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(days>0){
        days=`-${days}`
    }
    if(hours<10){
        hours=`0${hours}`
    }
    if(minutes<10){
        minutes=`0${minutes}`
    }
    if(seconds<10){
        seconds=`0${seconds}`
    }
    if (distance < 0) {
        clearInterval(x);
    }
    $(".day .inner").html(`${days} D`)
    $(".hours .inner").html(`${hours} h`)
    $(".minutes .inner").html(`${minutes} m`)
    $(".seconds .inner").html(`${seconds} s`)
},1000)


let maxLength =100;
$("textarea").on('input',function(e){
   let textLength =$(e.target).val().length;
   let newLenth=maxLength-textLength;

   if(newLenth <= 0){
       $("#charLength").text("your available character finished").attr("class","red")
       $(".chars").hide()
       $("#charLength").show()
   }else{
      $(".chars").show()
      $("#charLength").hide()
      $("#chars").text(newLenth)
      console.log($("#chars").text(newLenth))
   }

})

