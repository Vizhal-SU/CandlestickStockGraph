import React from 'react'
import { ChartData } from '../Data/ChartData'
import ReactApexChart from 'react-apexcharts'
import candlestickOptions from './candlestickOptions'

const Chart = ({seriesData, isDarkTheme}) => {
    return (
        <div className=' py-10 px-2 mx-auto mb-1 xl:w-2/4 lg:w-3/5 md:w-3/4  w-screen '>
            <div className='bg-white border-2 border-black rounded-lg text-center mx-auto mb-4 px-2 py-1 flex-center w-3/4 font-bold text-blue-950'>
                5 min chart
            </div>
            <ReactApexChart 
                series= {[
                    {
                        data: ChartData('all',seriesData),
                    }
                ]}
 
                type = "candlestick"
                options={candlestickOptions(isDarkTheme)}
            />
        </div>
    )
}

export default Chart;
