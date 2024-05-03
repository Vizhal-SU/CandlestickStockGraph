import { useState, useEffect} from 'react';

export const useFetchData = (apiUrl) => {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setStockData(data);
                // console.log('fetching data');
            }
            catch (error) {
                console.log('Error fetching data', error);
            }
        };

        fetchStockData();
    }, [apiUrl]);

    console.log(stockData)
    return stockData;
};