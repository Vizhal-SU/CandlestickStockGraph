import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChartData } from '../Data/ChartData';
import ReactApexChart from 'react-apexcharts';
import candleStickOptions from './candlestickOptions';
import { FaBoxOpen } from "react-icons/fa";


const HourChart = ({seriesData, isDarkTheme}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const selectedDateString = selectedDate ? selectedDate.toISOString().split('T')[0] : null;
    const chartData = ChartData('hourly', seriesData, selectedDateString);
    
    const handleDateChange = (date) => {
        const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        setSelectedDate(utcDate);
    };

    const handleNextDate = () => {
        if (selectedDate) {
            const nextDate = new Date(selectedDate);
            nextDate.setDate(nextDate.getDate() + 1);
            if (nextDate <= new Date('2009-01-30')) {
                setSelectedDate(nextDate);
            }
        }
    };

    const handlePrevDate = () => {
        if (selectedDate) {
            const prevDate = new Date(selectedDate);
            prevDate.setDate(prevDate.getDate() - 1);
            if (prevDate >= new Date('2009-01-02')) {
                setSelectedDate(prevDate);
            }
        }
    };

    const isNextDisabled = selectedDate && selectedDate >= new Date('2009-01-30');
    const isPrevDisabled = selectedDate && selectedDate <= new Date('2009-01-02');

    return (
        <div className=' py-10 px-2 m-auto w-screen md:w-3/4  lg:w-3/5 xl:w-2/4 '>
            <div className='flex justify-between items-center mb-4'>
                <button onClick={handlePrevDate} className={`px-4 py-1 bg-blue-500 text-white rounded-lg ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>Previous</button>
                
                <div className='flex justify-center items-center'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat='yyyy-MM-dd'
                        minDate={new Date('2009-01-02')}
                        maxDate={new Date('2009-01-30')}
                        className='inline-block rounded-lg text-center border-2 border-black  font-bold px-2 py-1 w-full text-blue-950'
                    />
                </div>
                
                <button onClick={handleNextDate} className={`px-4 py-1 bg-blue-500 text-white rounded-lg ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>Next</button>
            </div>
            
            {(selectedDate && chartData.length === 0) && (

                <div className='text-center text-red-500 p-10 text-2xl block m-auto'>
                    < FaBoxOpen  className='block mx-auto size-40 m-10'/>
                    No data available for the selected date range.
                </div>
            )}
            {(selectedDate && !(chartData.length === 0)) && (
                <div className='text-center'>
                    <ReactApexChart
                        series={[
                            { data: chartData },
                        ]}
                        type='candlestick'
                        options={candleStickOptions(isDarkTheme)}

                    />
                </div>
            )}
        </div>
    );
};

export default HourChart;


