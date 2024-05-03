export const ChartData = (type, seriesData, neededDate = '2009-01-01') => {
    let slicedData = {};
    let ChartData = [];
    let k;

    // Define the offset for GMT
    const gmtOffset = 5 * 60 * 60 * 1000 + 30 * 60 * 1000; // 5 hours and 30 minutes in milliseconds

    if (type === 'daily') {
        k = 10;
    } else if (type === 'hourly') {
        k = 13;
    } else {
        k = 19;
    }

    seriesData.forEach((a) => {
        let date = a['x'].slice(0, k);

        if ((type === 'hourly' && date.slice(0, -3) == neededDate) || type === 'daily' || type === 'all') {
            if (type === 'hourly') {
                date += ':00:00';
            }

            if (slicedData.hasOwnProperty(date)) {
                slicedData[date][1] = (slicedData[date][1] > a['y'][1]) ? slicedData[date][1] : a['y'][1];
                slicedData[date][2] = (slicedData[date][2] < a['y'][2]) ? slicedData[date][2] : a['y'][2];
                slicedData[date][3] = a['y'][3];
            } else {
                slicedData[date] = a['y'];
            }
        }
    });

    for (let key in slicedData) {
        let dateObj = new Date(key);
        dateObj.setTime(dateObj.getTime() + gmtOffset);
        let adjustedDate = dateObj.toISOString();
        slicedData[adjustedDate] = slicedData[key];
        delete slicedData[key];
    }

    for (let [key, value] of Object.entries(slicedData)) {
        ChartData.push({
            'x': key,
            'y': value
        });
    }

    // console.log(ChartData)
    return ChartData;
};
