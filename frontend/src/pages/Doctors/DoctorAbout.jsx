/*eslint-disable react/prop-types*/
import { formatDate } from "../../utils/formateDate"
import useGetProfile from  '../../hooks/useFetchData'
import { BASE_URL } from "../../config";

const DoctorAbout = (name, about, qualifications, experiences) => {

  const { data } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
    );

  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">About of 
            <span className="text-[Aqua] font-bold text-[24px] leading-9">
                {data.name}
            </span>
            </h3>
            <p className="text__para">
                {data.about}
            </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">Education</h3>
            <ul className="pt-4 md:p-5">
              
              {data.qualifications?.map((item,index)=> <li  key={index} class="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
    <div>
      <span class="text-[green] text-[15px] leading-6 font-semibold">
        {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
      </span>
      <p class="text-[16px] leading-6 font-medium text-textColor">
        {item.degree}
      </p>
    </div>
    <p class="text-[14px] leading-5 font-medium text-textColor">
        {item.university}
      </p>
  </li>)}
  

</ul>


        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">Experience</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">

              {data.experiences?.map((item,index) => <li  key={index} className="p-4 rounded bg-[#fff9ea]">
                <span className="text-[#e3b13e] text-[15px] leading-6 font-semibold">
                    {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
                </span>
                <p class="text-[16px] leading-6 font-medium text-textColor">
                    {item.position}
                </p>
                <p class="text-[14px] leading-5 font-medium text-textColor">
                  {item.hospital}
                 </p>
            </li> )}

            


            </ul>

        </div>
    
    </div>
  )
}

export default DoctorAbout