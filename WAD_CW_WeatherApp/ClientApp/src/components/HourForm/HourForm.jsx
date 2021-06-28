import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import Select from 'react-select'
import axios from 'axios';
import { available_images } from "../DayForm/DayForm.component";
import { withRouter } from 'react-router';

const DayForm = ({ loadData, match }) => {

    const [formValues, setFormValues] = useState({});

    const handleFormSubmit = () => {
        console.log(formValues);
        axios({
            url: '/api/HourForecasts',
            method: 'post',
            data: { ...formValues, DayForecastId: match.params.DayForecastId}
        }).then(res => {
            loadData(match.params.DayForecastId);
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
    }

    const fields = [
        {
            name: "Hour",
            label: "Hour",
            type: 'text'
        },
        {
            name: "Weather",
            label: "Weather",
        },
        {
            name: "Teperature",
            label: "Temperature"
        },
    ]

    return <div style={{ width: '50%', margin: 'auto', marginBottom: 30 }}>
        {
            fields.map((field, index) => <FormInput key={index} handleChange={handleChange} {...field} value={formValues[field.name]} />)
        }
        <Select
            onChange={val => setFormValues({ ...formValues, WeatherCode: val.value })}
            options={available_images.map(val => ({ value: val, label: <img style={{ height: 40, width: 40 }} src={`./${val}`} /> }))} />
        <CustomButton style={{ marginTop: 30}} onClick={handleFormSubmit} default>Submit</CustomButton>
    </div>
}

export default withRouter(DayForm);
