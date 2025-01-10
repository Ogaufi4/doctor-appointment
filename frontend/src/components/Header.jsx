
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='flex flex-col flex-wrap md:flex-row  bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
     
      {/* left side */}

    <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appointment <br/> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-centre gap-3 text-white text-sm font-light '> 
            <img className='w-29 ' src={assets.group_profiles} alt="" />
            <p>Simply browse though our extensive list of trusted doctors, <br className='hidden sm:block'/>schedule your appointment hussle-free</p>
        </div>
        <a href="" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transform transition duration-300'>
            Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
   </div>

        {/* right side */}

        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg ' src={assets.header_img} alt="" />
        </div>

    </div>
  )
}

export default Header
