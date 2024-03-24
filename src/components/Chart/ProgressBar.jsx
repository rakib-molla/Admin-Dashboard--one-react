import { Flex, Progress } from 'antd';
const ProgressBar = () => (
  <Flex
    gap='large'
    vertical>
    <div>
      <h2 className='text-[16px] leading-4 font-normal text-[#16F6A0]'>
        Server Migration
      </h2>
      <Progress
        percent={30}
        strokeColor={'#16F6A0'}
      />
    </div>
    <div>
      <h1 className='text-[16px] leading-4 font-normal text-blue-400'>
        Sales Tracking
      </h1>
      <Progress
        percent={50}
        status='active'
      />
    </div>
    <div>
      <h1 className='text-[16px] leading-4 font-normal text-red-400'>Error </h1>
      <Progress
        percent={70}
        status='exception'
      />
    </div>
    <div>
      <h1 className='text-[16px] leading-4 font-normal text-green-600'>
        Success Rate
      </h1>
      <Progress percent={100} />
    </div>
  </Flex>
);
export default ProgressBar;
