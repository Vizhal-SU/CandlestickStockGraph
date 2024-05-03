import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import {useState,useEffect } from 'react'
import { useFetchData } from './Data/FetchData'
import { FormattedData } from './Data/FormattedData'

import MainLayout from './Layout/MainLayout';
import Hero from './Components/Hero';

import DayChart from './Graphs/DayChart';
import HourChart from './Graphs/HourChart';
import Chart from './Graphs/Chart';
import NotFoundPage from './Components/NotFoundPage';

import './App.css'


function App() {
  const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&month=2009-01&outputsize=full&apikey=demo/';
  const apiUrl2 = 'http://localhost:3000/Time%20Series%20(5min)'

  let stockData = useFetchData(apiUrl);

  const seriesData = FormattedData(stockData);
  // console.log(seriesData)

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // console.log(isDarkTheme)

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [isDarkTheme]);
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>}>
        <Route index element={<Hero />} />
        <Route path = '/DayChart' element = {<DayChart seriesData={ seriesData} isDarkTheme={isDarkTheme}/>} />
        <Route path = '/HourChart' element = {<HourChart seriesData={ seriesData} isDarkTheme={isDarkTheme}/>} />
        <Route path = '/Chart' element = {<Chart seriesData={ seriesData} isDarkTheme={isDarkTheme}/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )

  
  return (
    <div>
      <RouterProvider router = {router} />
    </ div>
  )
}

export default App