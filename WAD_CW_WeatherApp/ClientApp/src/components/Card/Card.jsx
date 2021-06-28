import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Card = ({ weatherCode, minTeperature, maxTeperature, teperature, dayTime, hour, weather }) => {


    let day_index = hour ?? moment(dayTime).format('DD MMM');

    return (
            <div 
            data-testid="card-test-id"
            style={{ border: '1px #999 solid', borderRadius: 11, cursor: 'pointer', minHeight: 106, minWidth: 106, margin: 3}}>
            <div style={{padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>
                    <strong>{day_index}</strong>
                </div>
                <div>
                    <img title={ weather} src={`./${weatherCode}`} alt="weather img" width={60} height={60} />
                </div>
                {
                    teperature ? <div style={{textAlign: 'center'}}>{teperature}{'\u00b0'}</div>
                    : <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <div>{minTeperature}{'\u00b0'}</div>
                        <div style={{ marginLeft: 10 }}>{maxTeperature}{'\u00b0'}</div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Card

export const DayIndex = [
    { short: "Sun", long: "Sunday" },
    { short: "Mon", long: "Monday" },
    { short: "Thue", long: "Thuesday" },
    { short: "Wed", long: "Wednesday" },
    { short: "Thur", long: "Thursday" },
    { short: "Fri", long: "Friday" },
    { short: "Sat", long: "Saturday" },
]

