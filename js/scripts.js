$(function(){
    var slider=$('.slider');
    var btnLeft=$('.btn .left');
    var btnRight=$('.btn .right');
    var slideindex=0;
    //slider
    slider.css('background-image', 'url(slide/slide00.svg)')

    btnLeft.click(function(){
        if(slideindex>=1){
            slideindex=slideindex-1;
        }
        slider.css('background-image', 'none');
        slider.css('background-image', 'url(slide/slide0' +slideindex +'.svg)');
        $('.sliderindex span').text(slideindex+1);
        $('.Qbtn').hide();
    });


    btnRight.click(function(){
        console.log("right clicked");
        if(slideindex<4){
            slideindex=slideindex+1;
        }
        slider.css('background-image', 'none');
        slider.css('background-image', 'url(slide/slide0' +slideindex +'.svg)');
        $('.sliderindex span').text(slideindex+1);
        if(slideindex==4){
        $('.Qbtn').fadeIn();
        }
    })

    //get userAnswer
    var Qbtn=$('.index1');
    var Qbtn2=$('.index2');
    var Qbtn3=$('.index3');
    
    Qbtn.click(function(){
        var userNum=$(this).data('number');
        console.log(userNum);
        $('.userAnswer').text(userNum);
    });

    Qbtn2.click(function(){
        var userNum2=$(this).data('number');
        console.log(userNum2);
        $('.userAnswer2').text(userNum2);
    });

    Qbtn3.click(function(){
        var userNum3=$(this).data('number');
        console.log(userNum3);
        $('.userAnswer3').text(userNum3);
    });

    //playAnimation
    var ansbtn=$('.ansbtn');
    var finbtn=$('.finbtn');
    var test=$('.test');
    var modal=$('#modalwindow');

    ansbtn.click(function(){
        $('.lottie1').css('display','block');
        ansbtn.fadeOut();
        finbtn.delay(900).fadeIn();
        $(ansbtn).off(e);
    });

    finbtn.click(function(){
        test.fadeOut();
        $('footer').hide();
        $('.grayfill').delay(500).fadeIn()
        modal.delay(500).fadeIn();
        $('footer').fadeIn();

    });




    


});
