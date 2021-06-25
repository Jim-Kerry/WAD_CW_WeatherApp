import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Card from "./components/Card/Card";

import './custom.css'

const App = () => {
    const [data, setData] = useState(sample_data);

    return (
        <Layout>
            <Route
                key="daily"
                path="/"
                exact
                render={() => (
                    <div
                        style={{ display: 'flex', justifyContent: 'space-around', width: '60%', margin: '30px auto' }}>
                        {
                            //when data is not fetched or still fetching, it must not crash
                            data?.map((item, idx) => <Link
                                key={`link-${idx}`}
                                to={`/${item.DayForecastId}`}
                                style={{ color: '#000', textDecoration: 'none' }}>
                                {
                                    <Card {...item} Time={ item.Date} key={idx} />
                                }

                            </Link>) ?? 'Loading...'
                        }
                    </div>)} />
            <Route path='/:DayForecastId' render={ ()=><div>Hi</div>} />
            <Route path='/sample/counter' component={Counter} />
            <Route path='/sample/fetch-data' component={FetchData} />
        </Layout>
    );
}

export default App;



export const sample_data = [
    {
        DayForecastId: 1,
        Date: '6-25-2021',
        MinTeperature: 67,
        MaxTeperature: 75,
        WeatherCode: '01d.png'
    },
    {
        DayForecastId: 2,
        Date: '6-26-2021',
        MinTeperature: 78,
        MaxTeperature: 67,
        WeatherCode: '02d.png'
    },
    {
        DayForecastId: 3,
        Date: '6-27-2021',
        MinTeperature: 78,
        MaxTeperature: 67,
        WeatherCode: '03d.png'
    },
    {
        DayForecastId: 4,
        Date: '6-28-2021',
        MinTeperature: 78,
        MaxTeperature: 67,
        WeatherCode: '04d.png'
    },
    {
        DayForecastId: 5,
        Date: '6-29-2021',
        MinTeperature: 78,
        MaxTeperature: 67,
        WeatherCode: '09n.png'
    }
]


