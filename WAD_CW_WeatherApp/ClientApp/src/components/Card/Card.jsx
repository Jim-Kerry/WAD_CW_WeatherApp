import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ weatherCode, minTeperature, maxTeperature, teperature, dayTime }) => {


    let day_index = new Date(dayTime).getDay();

    return (
            <div 
            data-testid="card-test-id"
            style={{ border: '1px #999 solid', borderRadius: 11, cursor: 'pointer', minHeight: 106, minWidth: 106, margin: 3}}>
            <div style={{padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>
                    <strong>{DayIndex[day_index].short}</strong>
                </div>
                <div>
                    <img src={`./${weatherCode}`} alt="weather img" width={60} height={60} />
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

