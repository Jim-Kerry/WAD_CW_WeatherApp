import React from 'react';
import {CustomButtonContainer} from './CustomButton.styled';

const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;