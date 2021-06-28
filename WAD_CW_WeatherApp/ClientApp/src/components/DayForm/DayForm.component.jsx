import React, { useEffect, useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import Select from 'react-select'
import axios from 'axios';
import { withRouter } from 'react-router';
import moment from 'moment';

const DayForm = ({ loadData, match }) => {


    
    const [formValues, setFormValues] = useState({});
    const [actionUrl, setActionUrl] = useState({ url: '/api/DayForecasts', method: 'post'})

    const handleFormSubmit = () => {
        console.log(formValues);
        axios({
            ...actionUrl,
            data: formValues
        }).then(res => {
            loadData();
            console.log(res)
        }).catch(e => {
            console.error(e);
            //alert("Error occured!");
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        formValues[name] = value;
        setFormValues({ ...formValues });

        console.log(formValues);
    }

    const fields = [
        {
            name: "DayTime",
            label: "Date",
            type: 'date'
        },
        {
            name: "Weather",
            label: "Weather",
        },
        {
            name: "MinTeperature",
            label: "Minimun temperature"
        },
        {
            name: "MaxTeperature",
            label: "Maximum temperature"
        }
    ]

    useEffect(() => {
        if (match.params.EditItemId) {
            axios({
                url: `/api/DayForecasts/${match.params.EditItemId}`
            }).then(res => {
                const { dayTime,  weather, weatherCode, minTeperature, maxTeperature, dayForecastId } = res.data;
                setFormValues({ DayForecastId: dayForecastId, DayTime: moment(dayTime).format('YYYY-MM-DD'), Weather: weather, MinTeperature: minTeperature, MaxTeperature: maxTeperature, WeatherCode: weatherCode });

                setActionUrl({ url: `/api/DayForecasts/${match.params.EditItemId}`, method: 'put'})

            })
        }
    }, [])
    


    return <div style={{ width: '50%', margin: 'auto', marginBottom: 30 }}>
        <h3>Daily forecast</h3>
        {
            fields.map((field, index) => <FormInput key={ index} handleChange={handleChange} {...field} value={ formValues[field.name] } />)
        }
        <Select
            value={ match.params.DayForecastId ? { value: formValues.WeatherCode, label: <img style={{ height: 40, width: 40 }} src={`./${formValues.WeatherCode
                
                }`} /> } : null}
            onChange={val => setFormValues({ ...formValues, WeatherCode: val.value})}
            options={available_images.map(val=>({value: val, label: <img style={{height: 40, width: 40}} src={`./${val}`} />}))} />
        <CustomButton  style={{marginTop: 30}} onClick={ handleFormSubmit } default>Submit</CustomButton>
        </div>
}

export default withRouter(DayForm);

export const available_images = [
    '01d.png',
    '01n.png',
    '02n.png',
    '02d.png',
    '03d.png',
    '03n.png',
    '04n.png',
    '04d.png',
    '09d.png',
    '09n.png',
    '11n.png',
    '11d.png',
    '13d.png',
    '50d.png',
]