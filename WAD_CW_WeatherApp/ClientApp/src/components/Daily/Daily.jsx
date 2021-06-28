import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import axios from 'axios';
import DayForm from '../DayForm/DayForm.component';


const Daily = ({ isAdmin }) => {
    const [data, setData] = useState([]);
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

    const handleRemove = id => {
        console.log(id);
        axios({
            url: `/api/DayForecasts/${id}`,
            method: 'delete'
        }).then(res => {
            loadData();
        }).catch(e => {
            console.error(e);
        })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
        <div
            style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around', width: '60%', margin: '30px auto' }}>
            {
                //when data is not fetched or still fetching, it must not crash
                data?.sort((a, b) => new Date(a.dayTime).getTime() - new Date(b.dayTime).getTime())
                        .map((item, idx) => <div key={ `constainer-${idx}`}><Link
                        key={`link-${idx}`}
                        to={`/${item.dayForecastId}`}
                        style={{ color: '#000', textDecoration: 'none' }}>
                        {
                            <Card {...item} Time={item.dayTime} key={idx} />
                        }

                    </Link>
                        {
                                isAdmin ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <div key={`remove-btn-${idx}`} onClick={() => handleRemove(item.dayForecastId)} style={{ color: 'red', textAlign: 'center', cursor: 'pointer' }}>Remove</div>
                                    <div style={{ color: 'blue', textAlign: 'center', cursor: 'pointer' }}><Link to={ `/DayForecast/Edit/${item.dayForecastId}`}>Edit</Link></div>
                                </div> : null
                        }
                    </div>) ?? 'Loading...'
            }
            
        </div>
        <div>
            {
                isAdmin ?
                    <DayForm loadData={loadData} />
                    : null
            }
            </div>
        </div>
        )
}

export default Daily;