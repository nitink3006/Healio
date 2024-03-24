import React from 'react'
import { formatDate } from '../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">About of 
            <span className="text-[Aqua] font-bold text-[24px] leading-9">
                Muhibur Rehnam
            </span>
            </h3>
            <p className="text__para">
                Dr. Muhib Ur Rehman, a skilled neurosurgeon, is known for his expertise in treating complex conditions of the brain and spine.  He tackles delicate procedures with precision and offers patients personalized care throughout their journey.Known for his meticulous approach and steady hand, Dr. Rehman inspires confidence in his patients as he guides them through their surgical journey.Dr. Muhib Rehman is a dedicated surgeon who prioritizes patient care, ensuring they receive personalized attention throughout their treatment.
            </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">Education</h3>
            <ul className="pt-4 md:p-5">
  <li class="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
    <div>
      <span class="text-[green] text-[15px] leading-6 font-semibold">
        {formatDate('06-12-2014')} - {formatDate('09-13-2016')}
      </span>
      <p class="text-[16px] leading-6 font-medium text-textColor">
        PhD in Surgeon
      </p>
    </div>
    <p class="text-[14px] leading-5 font-medium text-textColor">
        New Apollo Hospital, New York.
      </p>
  </li>

  <li class="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
    <div>
      <span class="text-[green] text-[15px] leading-6 font-semibold">
        {formatDate('07-04-2010')} - {formatDate('12-04-2014')}
      </span>
      <p class="text-[16px] leading-6 font-medium text-textColor">
        PhD in Surgeon
      </p>
    </div>
    <p class="text-[14px] leading-5 font-medium text-textColor">
        New Apollo Hospital, New York.
      </p>
  </li>

  

</ul>


        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">Experience</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-[#e3b13e] text-[15px] leading-6 font-semibold">
                    {formatDate('06-12-2014')} - {formatDate('09-13-2016')}
                </span>
                <p class="text-[16px] leading-6 font-medium text-textColor">
                    Sr. Surgeon
                </p>
                <p class="text-[14px] leading-5 font-medium text-textColor">
        New Apollo Hospital, New York.
      </p>
            </li>


            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-[#e3b13e] text-[15px] leading-6 font-semibold">
                    {formatDate('06-12-2014')} - {formatDate('09-13-2016')}
                </span>
                <p class="text-[16px] leading-6 font-medium text-textColor">
                    Sr. Surgeon
                </p>
                <p class="text-[14px] leading-5 font-medium text-textColor">
        New Apollo Hospital, New York.
      </p>
            </li>
            </ul>

        </div>
    
    </div>
  )
}

export default DoctorAbout