import React from 'react'

import Slider from 'react-slick'
import { FaAngleDown } from 'react-icons/fa'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/**
 *
 * @returns
 */

function Highlight() {

    const banners = [
        {
            id: '7654567534',
            name: 'null',
            order: 1,
            url: 'https://placeholder.co/1700x600',
            link: null
        },
        {
            id: '7654567534',
            name: 'null',
            order: 2,
            url: 'https://placeholder.co/1700x600',
            link: null
        },
        {
            id: '7654567534',
            name: 'null',
            order: 3,
            url: 'https://placeholder.co/1700x600',
            link: null
        }
    ]

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: false,
        dots: true,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000
    }
    return (
        <div className="banner__head">
            <div className='banner__wrapper'>
                <div className='banner__tip'>
                    <FaAngleDown className='banner__tip__icon' />
                </div>
                <Slider {...sliderSettings}>
                    {
                        banners
                            ?
                            (
                                banners.map((banner, index) => (
                                    <div className='banner' key={index}>
                                        <img className='banner__image' src={banner.url} alt={banner.name} />
                                    </div>
                                ))
                            )
                            :
                            null
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Highlight
