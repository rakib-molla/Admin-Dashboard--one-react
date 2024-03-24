import {FaBolt, FaChartBar, FaChevronLeft, FaChevronRight, FaPage4, FaRegSun, FaTable, FaTachometerAlt, FaWrench} from "react-icons/fa"

function Sidebar() {
  return (
    <div className='bg-blue-500 overflow-y-auto h-screen px-6'>
      <div className='px-[15px]  py-[30px] flex items-center justify-center border-b-[1px] border-gray-400 pb-1'>
        <h1 className='text-white font-extrabold text-center text-[20px] leading-[24px] cursor-pointer'>
          Admin Panel
        </h1>
      </div>
      <div className='flex items-center justify-center  gap-[15px] py-[20px] border-b-[1px] border-gray-400'>
        <FaTachometerAlt color='white' />
        <p className='text-[14px] leading-[20px] font-bold text-white '>
          Dashboard
        </p>
      </div>

      <div className=' pt-4 border-b-[1px] border-gray-400'>
        <p className='text-[10px] font-extrabold leading-4 text-gray-400'>
          INTERFACE
        </p>
        <div className='flex items-center  gap-3 py-3 cursor-pointer'>
          <div className='flex items-center gap-3'>
            <FaRegSun color='white' className="cursor-pointer"/>
            <p className='text-[14px] leading-4 font-normal text-white'>
              Components
            </p>
          </div>
          <FaChevronRight color='white' />
        </div>
        <div className='flex items-center  gap-3 py-3 cursor-pointer'>
          <div className='flex items-center gap-3'>
            <FaWrench color='white' />
            <p className='text-[14px] leading-4 font-normal text-white'>
              Utilities
            </p>
          </div>
          <FaChevronRight color='white' />
        </div>
      </div>

      <div className=' pt-4 border-b-[1px] border-gray-400'>
        <p className='text-[10px] font-extrabold leading-4 text-gray-400'>
          Addons
        </p>
        <div className='flex items-center  gap-3 py-3 cursor-pointer'>
          <div className='flex items-center gap-3'>
            <FaPage4 color='white' />
            <p className='text-[14px] leading-4 font-normal text-white'>
              Pages
            </p>
          </div>
          <FaChevronRight color='white' />
        </div>
        <div className='flex items-center  gap-3 py-3 cursor-pointer'>
          <div className='flex items-center gap-3'>
            <FaChartBar color='white' />
            <p className='text-[14px] leading-4 font-normal text-white'>
              Chart
            </p>
          </div>
        </div>
        <div className='flex items-center  gap-3 py-3 cursor-pointer'>
          <div className='flex items-center gap-3'>
            <FaTable color='white' />
            <p className='text-[14px] leading-4 font-normal text-white'>
              Table
            </p>
          </div>
        </div>
      </div>

      {/* upgrade pro section  */}
      <div className='flex items-center justify-center pt-4'>
        <div className='h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center'>
          <FaChevronLeft color='white' className="cursor-pointer"/>
        </div>
      </div>
      <div className='bg-[#3C5EC1] mt-4 flex items-center justify-center flex-col py-4 px-3 gap-4 rounded-md'>
        <FaBolt color='white' />
        <p className='text-[12px] leading-4 font-normal text-center text-gray-400 px-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          itaque nisi
        </p>
        <button className='bg-green-300 px-3 py-1 rounded-sm'>
          Upgrade to Pro!
        </button>
      </div>
    </div>
  );
}

export default Sidebar