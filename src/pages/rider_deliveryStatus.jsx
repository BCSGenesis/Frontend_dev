import React, { useEffect, useState } from 'react';
import { RiderSelectedOrder } from '../components/Rider_selectedOrder';
const { kakao } = window;

export const RiderDeliveryStatus = () => {
  const [finished, setFinished] = useState(false);
  const [currentPosition, setCurrentPosition] = useState();

  const onClickFinish = () => {
    setFinished(!finished);
  };

  useEffect(() => {
    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      } else {
        alert('위치 정보를 사용할 수 없습니다.');
      }
    };

    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (!currentPosition) return;

    kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const location = new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng);
      const option = {
        center: location,
        level: 5,
      };
      const map = new kakao.maps.Map(mapContainer, option);
      const marker = new kakao.maps.Marker({ position: location });
      marker.setMap(map);
    });
  }, [currentPosition]);

  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-4'>
        <div className='flex justify-center'>
          <div className='border-[1px] px-2 rounded-lg max-w-[250px] border-darkGray whitespace-nowrap overflow-ellipsis overflow-hidden'>
            서울시 강남구 언주로 18길 여기는 잘리는 곳
          </div>
        </div>

        {finished ? (
          <div className='flex justify-center items-center z-30'>
            <div className='flex flex-col justify-between absolute w-72 h-44 py-4 mt-[520px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <div className='font-bold text-headline'>배달을 완료했어요!</div>
                <div className='text-caption'>고객님께 배달 완료를 알려요!</div>
              </div>
              <div className='flex justify-center gap-4'>
                <button
                  className='bg-lightYellow w-20 p-2 rounded-xl font-bold border-[1.5px] border-black'
                  onClick={onClickFinish}>
                  완료
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <div className='w-full h-[520px] relative overflow-hidden mt-6'>
          <div id='map' className='absolute top-0 left-0 w-full h-full object-cover'></div>
        </div>
      </div>

      <div className='flex overflow-x-auto pt-5 pb-2 ml-5'>
        <RiderSelectedOrder onClickEvent={onClickFinish} />
        <RiderSelectedOrder onClickEvent={onClickFinish} />
        <RiderSelectedOrder onClickEvent={onClickFinish} />
      </div>
    </div>
  );
};
