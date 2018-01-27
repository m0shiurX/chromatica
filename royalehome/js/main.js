$(document).ready(function () {
    var $product = $(".rooms");
    $product.on('mouseover', function () {
        glider($product);
    }).slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        useCSS: true,
        responsive: [{
                breakpoint: 970,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    var $quotes = $(".quotes");
    $quotes.slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Mouseover slide only
    // var $hero = $(".hero");
    // $hero.slick({
    //     dots: false,
    //     infinite: true,
    //     arrows: false,
    //     speed: 1000,
    //     autoplay: true,
    //     autoplaySpeed: 4500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     pauseOnHover: true,
    //     useCSS: true,
    //     useTransform: true,
    //     cssEase: 'ease-in-out'
    // });
    // Mouseover slide only
    function glider($slide) {
        $slide.on('wheel', {
            $slide: $slide
        }, function (event) {
            event.preventDefault();
            var $slide = event.data.$slide;
            var delta = event.originalEvent.deltaY;
            if (delta > 0) {
                $slide.slick('slickPrev');
            } else {
                $slide.slick('slickNext');
            }
        });
    }
    var urls = ["a.jpg", "i.jpg"];
    var base = "assets/";
    var count = 1;
    $('.hero_container').css('background-image', 'url("'+ base + urls[0] + '")');
    setInterval(function () {
        $('.hero_container').css('background-image', 'url("'+ base + urls[count] + '")');
        count == urls.length - 1 ? count = 0 : count++;
    }, 8000);
    
    $('.toggle').on('click', function () {
        $('.menu').toggleClass('active');
    });
});