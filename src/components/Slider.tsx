import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Slider: React.FC = () => {
    return (
        <div className="py-16 px-4 bg-mihuru-dark">
            <h1 className='text-3xl md:text-4xl font-serif font-bold mb-4 text-mihuru-gold text-center'>Exclusive  Rewards Gallery</h1>
            <p className='text-white/80 max-w-2xl mx-auto text-center'>Discover the amazing rewards waiting for you at every milestone of your loan journey</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper-container'
            >
                <SwiperSlide>
                    <img src="https://itraveleoblogdiag865.blob.core.windows.net/websiteimages/assets/images/speakers.png" alt="product-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://itraveleoblogdiag865.blob.core.windows.net/websiteimages/assets/images/smartwatch.png" alt="product-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://itraveleoblogdiag865.blob.core.windows.net/websiteimages/assets/images/smartTv.png" alt="product-3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://itraveleoblogdiag865.blob.core.windows.net/websiteimages/assets/images/goodies-mihuru.png" alt="product-4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://itraveleoblogdiag865.blob.core.windows.net/websiteimages/assets/images/Tanishq.png" alt="product-5" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ArrowLeft className='w-4 h-4 text-mihuru-text' />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ArrowRight className='w-6 h-6 text-mihuru-text' />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default Slider
