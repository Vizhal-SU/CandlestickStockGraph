import React, { useEffect } from 'react';
import bgImage from '../assets/images/bg.png';

const Hero = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);   // To disable scroll

  return (
    <div style={{ backgroundImage: `url(${bgImage})`, }} className="bg-cover bg-center flex justify-center items-center h-screen">
      <div className="px-4 py-2 bg-gray-800 opacity-70 text-center max-w-2xl">
        <h3 className="text-2xl text-white font-bold opacity-100">Candlestick Charts</h3>
        <p className="my-2 text-sm text-gray-300">
          A candlestick chart is a style of financial chart used to describe price movements of a security, derivative, or currency.
          Each candlestick represents four important pieces of information for that day: open and close in the thick body, and high and low in the "candle wick". 
          Being densely packed with information, it tends to represent trading patterns over short periods of time, often a few days or a few trading sessions.
          They are used by traders to determine possible price movement based on past patterns, and who use the opening price, closing price, high and low of that time period.
        </p>
      </div>
    </div>
  );
};

export default Hero;
