jQuery((function(){docWidth=window.innerWidth,window.addEventListener("resize",(function(){docWidth=window.innerWidth,console.log(docWidth),docWidth<900&&($(".header__bottom").css({position:"static"}),$(".first_block").css({"margin-top":"0"}))})),window.addEventListener("scroll",o=>{window.scrollY>40&&docWidth>900?($(".header__bottom").css({position:"fixed",top:"0"}),$(".first_block").css({"margin-top":"70px"})):window.scrollY<40&&($(".header__bottom").css({position:"static"}),$(".first_block").css({"margin-top":"0"}))}),window.addEventListener("scroll",o=>{window.scrollY>270?$(".go_top").css({position:"fixed",bottom:"40px",opacity:"1",transition:"all .4s"}):window.scrollY<270&&$(".go_top").css({bottom:"-50px",opacity:"0",transition:"all .4s"})}),$(".slider__items").slick({autoplay:!0,autoplaySpeed:5e3,pauseOnFocus:!1,pauseOnHover:!1,slidesToShow:1}),$(".menu_burger").click((function(o){$(".menu_burger").toggleClass("active")}))}));