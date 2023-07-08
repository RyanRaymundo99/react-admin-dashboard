import React, { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://yahoo-finance127.p.rapidapi.com/historic/%5EBVSP/1d/15d', {
          headers: {
            'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
          }
        });

        const data = await response.json();
        console.log('Raw data:', data);

        if (!data || !data.indicators || !data.timestamp) {
          console.error('Invalid data format');
          return;
        }

        const { timestamp, indicators } = data;

        if (!indicators.quote || !indicators.quote[0].close) {
          console.error('Invalid data format');
          return;
        }

        const dates = timestamp.map(timestamp => new Date(timestamp * 1000));
        const closeData = indicators.quote[0].close.map((value, index) => ({ x: dates[index], y: value }));

        const chartData = [
          {
            id: 'Close',
            data: closeData
          }
        ];

        setChartData(chartData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      {chartData && (
        <ResponsiveLine
          data={chartData}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
          xFormat="time:%b %d"
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          axisBottom={{
            format: '%b %d',
            tickValues: 'every 2 days',
            tickTextFill: '#fff'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Price',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          enableGridX={false}
          enableGridY={true}
          colors={{ scheme: 'category10' }}
          enablePoints={false}
          enableArea={true}
          areaOpacity={0.2}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 40,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              textColor: 'white' // Customize the legend text color here
            }
          ]}
        />
      )}
    </div>
  );
};

export default LineChart;
