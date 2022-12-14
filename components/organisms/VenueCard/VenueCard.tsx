import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface VenueCardProps {
  title?: string;
  variant?: string;
  eventPage?: string;
  image: any;
  function?: () => any;
}

const VenueCard = (props: VenueCardProps) => {
  const router = useRouter();

  const navigateToEventPage = (e: any) => {
    e.preventDefault();
    if (props.eventPage) {
      router.push(props.eventPage);
    } else {
      router.push('/venue/1');
    }
  };

  switch (props.variant) {
    default:
      return (
        <div
          className='max-w-sm rounded overflow-hidden shadow-lg border-2 border-gray-100 hover:opacity-80'
          onClick={navigateToEventPage}>
          <Image className='w-full' src={props.image} alt='Sunset in the mountains' height={300} width={400} />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #photography
            </span>
            <span className='inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #travel
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #winter
            </span>
          </div>
        </div>
      );
    case 'long':
      return (
        <div
          className='flex flex-row rounded overflow-hidden shadow-lg w-full h-fit my-2 border-2 border-gray-100 hover:opacity-80'
          onClick={navigateToEventPage}>
          <Image src={props.image} alt='Sunset in the mountains' height={300} width={400} />
          <div className='flex flex-col justify-between p-4'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                <p className='text-gray-700 text-base'>Address</p>
              </div>
              <div className='font-bold text-xl mb-2'>
                <p className='text-gray-700 text-base'>Price</p>
              </div>
              <div className='font-bold text-xl mb-2'>
                <p className='text-gray-700 text-base'>Tickets</p>
              </div>
              <div className='font-bold text-xl mb-2'>
                <p className='text-gray-700 text-base'>Size</p>
              </div>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #winter
              </span>
            </div>
          </div>
        </div>
      );
  }
};

export default VenueCard;
