import { FaEllipsisV, FaRegCalendar } from 'react-icons/fa';
import SimpleLineChart from './Chart/SimpleLineChart';
import PaiChart from './Chart/PaiChart';
import ProgressBar from './Chart/ProgressBar';

function Dashboard() {
  return (
    <div className='pt-6 p-6 bg-[#F8F9FC]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-gray-400 text-[28px] leading-9 font-normal cursor-pointer'>
          Dashboard
        </h1>
        <button className='bg-[#3B82F6] h-8 rounded-sm text-white flex items-center px-7 cursor-pointer'>
          Generate Report
        </button>
      </div>

      <div className='grid grid-cols-4 gap-8 mt-6 pb-4'>
        <div className='h-[100px] rounded-md bg-white border-l-4 border-blue-500 flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-4 font-bold'>
              Earnings (MONTHLY)
            </h2>
            <h1 className='text[20px] leading-5 font-bold text-gray-400 mt-1'>
              $40,000
            </h1>
          </div>
          <FaRegCalendar />
        </div>
        <div className='h-[100px] rounded-md bg-white border-l-4 border-[#A616FF] flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-4 font-bold'>
              Earnings (MONTHLY)
            </h2>
            <h1 className='text[20px] leading-5 font-bold text-gray-400 mt-1'>
              $40,000
            </h1>
          </div>
          <FaRegCalendar />
        </div>
        <div className='h-[100px] rounded-md bg-white border-l-4 border-[#F63B82] flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-4 font-bold'>
              Earnings (MONTHLY)
            </h2>
            <h1 className='text[20px] leading-5 font-bold text-gray-400 mt-1'>
              $40,000
            </h1>
          </div>
          <FaRegCalendar />
        </div>
        <div className='h-[100px] rounded-md bg-white border-l-4 border-[#16F6A0] flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-4 font-bold'>
              Earnings (MONTHLY)
            </h2>
            <h1 className='text[20px] leading-5 font-bold text-gray-400 mt-1'>
              $40,000
            </h1>
          </div>
          <FaRegCalendar />
        </div>
      </div>

      {/* chart  */}
      <div className='flex flex-wrap mt-5 w-full gap-8'>
        <div className='basis-[65%] border bg-white shadow-md cursor-pointer rounded-md'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-4 px-4 border-b-[1px] mb-5'>
            <h1>Earning Overview</h1>
            <FaEllipsisV
              color='gray'
              className='cursor-pointer'
            />
          </div>
          <SimpleLineChart />
        </div>
        <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-md'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-4 px-4 border-b-[1px] mb-5'>
            <h1>Revenue Resource</h1>
            <FaEllipsisV
              color='gray'
              className='cursor-pointer'
            />
          </div>
          <div className='p-8'>
            <PaiChart />
          </div>
        </div>
      </div>

      {/* progress chart  */}
      <div className='flex w-full gap-5 mt-5'>
        <div className='basis-[50%] border bg-white shadow-md cursor-pointer rounded-md'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-4 px-4 border-b-[1px] mb-5'>
            <h1 className='text-blue-500 text-[18px] '>Project Overview</h1>
            <FaEllipsisV
              color='gray'
              className='cursor-pointer'
            />
          </div>
          <div className='space-y-5 p-5 '>
            <ProgressBar />
          </div>
        </div>
        <div className='basis-[50%] border bg-white shadow-md cursor-pointer rounded-md'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-4 px-4 border-b-[1px] mb-5'>
            <h1>Resource</h1>
            <FaEllipsisV
              color='gray'
              className='cursor-pointer'
            />
          </div>
          <div className='pl-5 flex items-center justify-center h-full'>
            <div className='flex items-center justify-center flex-col'>
              <img
                className='h-12 w-12'
                src='src/assets/nodata.png'
                alt=''
              />
              <p className='mt-5 text-gray-400'>No data available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
