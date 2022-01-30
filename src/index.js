import jQuery from 'jquery'

window.jQuery = window.$ = jQuery;
import slick from 'slick-carousel'

import style from './style/style.scss'
// SETTINGS
import settings from './settings/_bootstrap.custom.scss'

// Generic
import gridt from './generic/_grid.scss'
import reboot from './generic/_reboot.scss'

$(document).ready(function () {
    $('#galeria-slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
})

