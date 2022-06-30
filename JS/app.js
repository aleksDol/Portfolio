$(function(){


    /*-----------------------------Filter------------------------------*/

    let filter = $("[data-filter]");
    filter.on('click', function(event){
        event.preventDefault()
        
        let cat = $(this).data('filter')

        if(cat == "all"){
            $('[data-cat]').removeClass('hide')    
        }else{
            $('[data-cat]').each(function(){
                let workCat = $(this).data('cat')
    
                if(workCat!= cat){
                    $(this).addClass('hide')
                }else{
                    $(this).removeClass('hide')
                }
            })
            
        }
        
       
    })


    /*-----------------------------Modal------------------------------*/
    

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');
    modalCall.on('click', function(event){
        event.preventDefault();

        let $this = $(this)
        let modalId = $this.data('modal')
        $(modalId).addClass('show')
        $('body').addClass('no-scroll')

        setTimeout(function(){
            $(modalId).find('.modal__dialog').css({
                transform: 'rotateX(0)'
            })
        }, 200)

        $('#workSlider').slick('setPosition')
     
    })
    modalClose.on('click', function(event){
        event.preventDefault();

        let $this = $(this)
        let modalParets = $this.parents('.modal')
        modalParets.removeClass('show')
        $('body').removeClass('no-scroll')
    })

    $('.modal').on('click', function(event){
        event.preventDefault();

        $(this).removeClass('show')
        $('body').removeClass('no-scroll')
    })
    $('.modal__dialog').on('click', function(event){
        event.stopPropagation()
    })




/*Slider  https://kenwheeler.github.io/slick/*/


$('[data-slider="slick"]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    fade:true,
    arrows:false,
    dots:true
  });


  $('.slick-prev').on('click', function(event){
    event.preventDefault();

    let currenSlider = $(this).parents('.modal').find('[data-slider="slick"]')

    currenSlider.slick('slickPrev')
  })
  $('.slick-next').on('click', function(event){
      event.preventDefault();
      let currenSlider = $(this).parents('.modal').find('[data-slider="slick"]')
      currenSlider.slick('slickNext')

  })



        /*Mobile nav----------------------- */
        const nuvToggle = $('#nuvToggle')
        const nuv = $('#nuv')

      nuvToggle.on('click', function(event){
        event.preventDefault();
        nuv.toggleClass('show')
      })


})

/*Scrolling ---------------------------------------------------------------- */

$('.nav__link-scroll').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

$('.footer__nav-link--scroll').on('click', function(){
    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop:$(href).offset().top
    });
    return false;
})


/*------------------------------print----------------------------------- */

function CallPrint(strid) {
    var prtContent = document.getElementById(strid);
    var WinPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
    WinPrint.document.write('<div id="print" class="contentpane">');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.write('</div>');
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
    prtContent.innerHTML=strOldOne;
  }


