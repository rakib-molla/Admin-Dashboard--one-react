import { useState } from 'react';
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa';
  

function DashboardHeader() {
  const [profileOpen, setProfileOpen] = useState(false);
  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };
  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-6'>
      <div className='flex items-center rounded-md'>
        <input
          type='text'
          className='bg-gray-200 h-10 outline-none pl-3 w-[350px]  placeholder:text-[14px] font-normal'
          placeholder='search for'
        />
        <div className='bg-[#3B82F6] h-9 px-5 py-5 flex items-center justify-center rounded-r-md '>
          <FaSearch
            className='cursor-pointer'
            color='white'
          />
        </div>
      </div>

      <div className='flex items-center gap-4 relative'>
        <div className='flex items-center gap-4 border-r-[1px] pr-6'>
          <FaRegBell className='cursor-pointer' />
          <FaEnvelope className='cursor-pointer' />
        </div>
        <div className='flex items-center gap-4 relative'>
          <p>Rakib Molla</p>
          <img
            onClick={handleProfileClick}
            className='h-10 w-10 rounded-full cursor-pointer'
            src='https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-1/242216316_4485799161542662_2545420565036110444_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHokqTOI1PczvOd9jOzSYU8SjJBQbEg2e1KMkFBsSDZ7UghmV1FmT9N7ktS-8v69XjnVnZaF9WzMBTFgGmMvJG4&_nc_ohc=i8vBDBrGXyUAX-4pB8e&_nc_ht=scontent.fdac27-2.fna&oh=00_AfAy1nHnpgtrfk_fzB20ibXf8qEEZ3YJBW1iBzITiVms9w&oe=660585C5'
            alt='image'
          />
        </div>
        { profileOpen &&
          (<div className='bg-white border w-[150px] h-[120px] absolute bottom-[-135px] z-20 right-0 pt-5 pl-5 space-y-1 '>
            <p className='cursor-pointer hover:text-blue-500'>Profile</p>
            <p className='cursor-pointer hover:text-blue-500 '>Setting</p>
            <p className='cursor-pointer hover:text-blue-500 '>Log out</p>
          </div>)
        }
      </div>
    </div>
  );
}

export default DashboardHeader;
