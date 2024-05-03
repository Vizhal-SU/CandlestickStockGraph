export const FormattedData = (stockData) => {
    const Data = []

    if (stockData['Time Series (5min)']) {
        Object.entries(stockData['Time Series (5min)']).map(([key, value]) => {
            Data.push({
                x: key,
                y: [
                    value['1. open'],
                    value['2. high'],
                    value['3. low'],
                    value['4. close'],
                ]
            })
        })
    } else if (stockData){
        Object.entries(stockData).map(([key, value]) => {
            Data.push({
                x: key,
                y: [
                    value['1. open'],
                    value['2. high'],
                    value['3. low'],
                    value['4. close'],
                ]
            })
        })
    }


    return Data
}
