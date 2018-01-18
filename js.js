/* --------------------------- */
/* Import Super Mario Song */
/* --------------------------- */


sound = new buzz.sound('https://dl.dropbox.com/s/xhxgeyv8792wv1l/theme.mp3?dl=0', {
    formats: ["mp3"],
    preload: true,
    loop: false,
    autoPlay: true
});


/* --------------------------- */
/* Plays Super Mario Song */
/* --------------------------- */

$(document).ready(function(){
    $(window).scroll (function () {
        if ($(window).scrollTop() > 1) {
    	   sound.play();
        }
        else {
            sound.pause();
        }
	});
}); 

function initAnimation() {
    
    var mario = document.querySelector('.mario');
    var windowHeight = window.innerHeight;
    
    // Positions Mario at the bottom of any browser
    // mario.style.top = (windowHeight - 70) + 'px';
    
    // Positions Mario on the grass
    mario.style.top = (windowHeight - 124) + 'px';
    
    var $ = function(query) { return document.querySelectorAll(query)},
    
        $mario = $(".mario"),
        $coin = $('.coin'),
        $readyPrompt = $('.readyPrompt'),
        $pixelMario1 = $('.pixelMario1'),
        $pixelMario2 = $('.pixelMario2'),
        $pixelMario3 = $('.pixelMario3'),
        $pixelMario4 = $('.pixelMario4'),
        $part1 = $('.part1'),
        $part2 = $('.part2'),
        $part3 = $('.part3'),
        $part4 = $('.part4'),
        $ending = $('.ending');
    
    var tl = new TimelineMax();
    
    tl.to($readyPrompt, 1, {
        opacity: 1,
        ease: Linear,
    })
    
    tl.call(function(){
        tl.pause();
    });
    
    
    /* Mario starts running towards the ? box. */
    tl.to($mario, .5, {
        ease: Sine.easeOut
    }, 'StartRun+=4');
    
    /* Mario jumps up towards the ? box. */
    tl.to($mario, 2, {
        y: -50,
        ease: Elastic.easeOut
    }, "StartRun+=9.5");

    /* Mario comes down from the ? box. */
    tl.to($mario, 2, {
        y: 0
    }, "StartRun+=10");
    
    /* Mario starts running towards the tube. */
    tl.to($mario, 2, {
        x: 830
    }, "StartRun+=12");
    
    /* Mario jumps up towards the tube */
    tl.to($mario, 2, {
        marginTop: 505
    }, "StartRun+=13");
    
    /* Mario walks to middle of the tube*/
    tl.to('.mario', 2, {
        x: 910,
        marginTop: 510
    }, "StartRun+=14.3");
    
    /* Mario is on top of the tube */
    tl.to($mario, 2, {
      opacity: 0
    }, 'StartRun+=17');
 
    /* Pixel mario replaces Gif Mario*/
    tl.to($pixelMario1, 2, {
        opacity: 1
    }, 'marioChange-=1');

    tl.to($pixelMario1, .2, {
        opacity: 0
    }, 'marioChange+=.5');
    
    tl.to($pixelMario2, .2, {
        opacity: 1
    }, 'marioChange+=1');
    
    tl.to($pixelMario2, .2, {
        opacity: 0
    }, 'marioChange+=2');

    tl.to($pixelMario3, .2, {
        opacity: 1
    }, 'marioChange+=2.5');
    
    tl.to($pixelMario3, .2, {
        opacity: 0
    }, 'marioChange+=3');
    
    tl.to($pixelMario4, .2, {
        opacity: 1
    }, 'marioChange+=3.5');
    
    tl.to($pixelMario4, .2, {
        opacity: 0
    }, 'marioChange+=4');
    
    /* Mario poping out of second tube */
    tl.to($part1, .2, {
        opacity: 1
    }, 'marioChange+=6');
    
    tl.to($part1, .2, {
        opacity: 0
    }, 'marioChange+=6.5');
    
    tl.to($part2, .2, {
        opacity: 1
    }, 'marioChange+=6.7');
    
    tl.to($part2, .2, {
        opacity: 0
    }, 'marioChange+=7.5');
    
    tl.to($part3, .2, {
        opacity: 1
    }, 'marioChange+=8.2');
    
    tl.to($part3, .2, {
        opacity: 0
    }, 'marioChange+=8.8');
    
    tl.to($part4, .2, {
        opacity: 1
    }, 'marioChange+=9.1');
    
    tl.to($ending, .2, {
        opacity: 1,
        y: 150,
        ease: Bounce.easeOut
    }, 'marioChange+=10');
    
    tl.play();
}

initAnimation();
