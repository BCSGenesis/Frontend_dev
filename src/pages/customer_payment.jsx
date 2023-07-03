import { Link } from 'react-router-dom';
import { PaymentMenu } from '../components/Payment_menu';

export const CustomerPayment = () => {
  return (
    <div className='bg-[#F8F8F8]'>
      <div className='bg-white w-[386px] h-14 absolute z-10'></div>
      <div className='flex justify-center pt-4'>
        <div className='font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20'>
          장바구니
        </div>
      </div>

      <div className='bg-white mt-14 px-5 py-4 category-shadow'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-subtitle'>호화반점</div>
          <div>20~30분 후 도착</div>
        </div>
        <div className='flex justify-between items-end text-body border-t-[1.5px] pt-2 mt-2 border-lightGray'>
          <div>서울시 어쩌구 저쩌구 저쩌구로 배달</div>
          <div className='text-caption text-purple'>수정</div>
        </div>
      </div>

      <div className='flex flex-col gap-4 bg-white mt-4 px-5 py-4 category-shadow'>
        <PaymentMenu foodName='낙지탕탕미엔' option='곱빼기' price='15000' />
        <PaymentMenu foodName='낙지탕탕미엔' option='곱빼기' price='15000' />
        <div className='text-center font-bold text-purple'>+ 메뉴 추가</div>
      </div>

      <div className='bg-white mt-4 px-5 py-4 category-shadow'>
        <div className='font-bold text-subtitle'>결제 수단</div>
        <div className='flex mt-4'>
          <input class='w-4 accent-purple' type='radio' name='radio' />
          <span class='ml-2 text-caption font-bold'>폴리곤으로 결제</span>
        </div>
        <div className='flex mt-2'>
          <input class='w-4 accent-purple' type='radio' name='radio' />
          <span class='ml-2 text-caption font-bold'>BB 코인으로 결제</span>
        </div>
      </div>

      <div className='flex flex-col gap-2 bg-white my-4 px-5 py-4 category-shadow'>
        <div className='font-bold text-subtitle'>결제금액</div>
        <div className='flex justify-between items-center mt-2'>
          <div className='font-bold text-caption'>총 주문금액</div>
          <div className='text-caption'>30000원</div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-caption'>배달비</div>
          <div className='text-caption'>1350원</div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-caption'>배달팁</div>
          <div className='text-caption'>0원</div>
        </div>
        <div className='flex justify-between items-center border-t-[1.5px] pt-4 mt-4 border-lightGray'>
          <div className='font-bold text-body'>총 결제금액</div>
          <div className='font-bold text-subtitle'>31,350원</div>
        </div>
      </div>

      <div className='sticky bottom-0 bg-white px-4 pb-4'>
        <Link to='/customer/ordercomplete'>
          <button className='flex justify-center gap-2 bg-lightYellow w-[350px] py-3 rounded-md text-subtitle font-bold text-black'>
            <span>31,350원</span>결제하기
          </button>
        </Link>
      </div>
    </div>
  );
};