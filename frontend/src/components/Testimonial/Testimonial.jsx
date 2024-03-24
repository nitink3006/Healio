import React from 'react';
//import { Pagination } from 'swiper';
//import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css';
//import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import  { Pagination } from 'swiper/modules'

import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';


const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper 
      modules={[Pagination]} 
      spaceBetween={30} 
      slidesPerView={3} 
      pagination={{ clickable: true}}
        breakpoints={{
          640:{
            slidePerView:1,
            spaceBetween:0,
          },
          768:{
            slidePerView:2,
            spaceBetween:20,
          },
          1024:{
            slidePerView:3,
            spaceBetween:30,
          },
        }}
        >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Md. Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                <HiStar className="text-[#FF9500] w-[18px]  h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5" />
              </div>
              </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"I have taken medical services from them. They treat so well and they are proving the best medical services."</p>
            </div> 
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                <HiStar className="text-[#FF9500] w-[18px]  h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5" />
              </div>
              </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"I have taken medical services from them. They treat so well and they are proving the best medical services."</p>
            </div> 
        </SwiperSlide>


        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Palash Khatri
                </h4>
                <div className="flex items-center gap-[2px]">
                <HiStar className="text-[#FF9500] w-[18px]  h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5" />
              </div>
              </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"I have taken medical services from them. They treat so well and they are proving the best medical services."</p>
            </div> 
        </SwiperSlide>


        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Rahul Kumar
                </h4>
                <div className="flex items-center gap-[2px]">
                <HiStar className="text-[#FF9500] w-[18px]  h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5 " />
                <HiStar className="text-[#FF9500]  w-[18px] h-5" />
              </div>
              </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"I have taken medical services from them. They treat so well and they are proving the best medical services."</p>
            </div> 
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
