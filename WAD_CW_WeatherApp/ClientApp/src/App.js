import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Card from "./components/Card/Card";
import Switch from 'react-switch'
import axios from 'axios';

import './custom.css'
import DayForm from './components/DayForm/DayForm.component';

const App = () => {
    const [data, setData] = useState(null);
    const [adminMode, setAdminMode] = useState(true);

    //let's follow SRP: the funtion is responsible for only loading data
    const loadData = () => {
        axios({
            url: '/api/DayForecasts'
        }).then(res => {
            //console.log(res);
            setData(res.data);
        }).catch(e => {
            console.log(e);
        })
    }
    useEffect(() => {
        loadData();
    }, [])

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
                            data?.filter((item, index) => new Date(item.dayTime).getTime() >= new Date().getTime() - 24 * 60 * 60 * 100 && index < 6)
                                .sort((a, b) => new Date(a.dayTime).getTime() - new Date(b.dayTime).getTime() )
                                    .map((item, idx) => <Link
                                key={`link-${idx}`}
                                to={`/${item.dayForecastId}`}
                                style={{ color: '#000', textDecoration: 'none' }}>
                                {
                                    <Card {...item} Time={ item.dayTime} key={idx} />
                                }

                            </Link>) ?? 'Loading...'
                        }
                    </div>)} />
            <Route path='/:DayForecastId' render={ ()=><div>Hi</div>} />
            <Route path='/sample/counter' component={Counter} />
            <Route path='/sample/fetch-data' component={FetchData} />
            <div>Admin mode</div>
            <Switch
                checked={adminMode}
                onChange={setAdminMode}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
            />
            {
                adminMode ? 
                    <DayForm loadData={ loadData } />
                    : null
            }
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


