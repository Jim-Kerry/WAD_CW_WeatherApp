import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios';
import { withRouter } from 'react-router';
import HourForm from '../HourForm/HourForm';

const Hourly = ({ match, isAdmin }) => {

    const [hShown, setHShown] = useState([]);
    const handleShowHourly = DayForecastId => {
        axios({ 
            url: `/api/HourForecasts`
        }).then(res => {
            setHShown(res.data.filter(item=>item.dayForecastId==DayForecastId));
        }).catch(e => {
            console.error(e);
        })
    }

    const handleRemove = id => {
        axios({
            url: `/api/HourForecasts/${id}`,
            method: 'delete'
        }).then(res => {
            handleShowHourly(match.params.DayForecastId);
        }).catch(e => {
            console.error(e);
        })
    }

    useEffect(() => {
        //console.log(match)
        handleShowHourly(match.params.DayForecastId);
    }, [])

    return (
        <div>
            <h4 style={{ textAlign: 'center' }}>Hourly</h4>
            <div style={{ display: 'flex', justifyContent: 'center', width: '90%', margin: '30px auto', flexWrap: 'wrap' }}>
                {
                    //when data is not fetched or still fetching, it must not crash
                    hShown?.map((item, idx) => <div>
                        <Card {...item} key={idx} />
                        {
                            isAdmin ? <div key={`remove-btn-${idx}`} onClick={() => handleRemove(item.hourForecastId)} style={{ color: 'red', textAlign: 'center', cursor: 'pointer' }}>Remove</div> : null
                        }
                    </div>) ?? 'Loading...'
                }
            </div>

            <div>
                {
                    isAdmin ?
                        <HourForm loadData={ handleShowHourly } />
                        : null
                }
                </div>
        </div>
    )
}

export default withRouter(Hourly)
