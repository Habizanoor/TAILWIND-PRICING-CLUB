import { ArrowRightIcon, CheckCircleIcon, TicketIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-2xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>

            <button className='flex justify-center w-full py-2 rounded mt-6 bg-green-500 text-white hover:bg-green-700'>
                Buy Now <ArrowRightIcon className='ml-2 w-6 h-6 '></ArrowRightIcon>
            </button>

        </div>
    );
};

export default PricingOption;