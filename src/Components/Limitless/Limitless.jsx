import './Limitless.css';
import React from 'react';
import CustomButton from '../Share/CustomButton/CustomButton';


export default function Limitless() {
    return (
        <div className="Limitless-row">

            <p className='Limitless-title-firstLine'>
                Limitless Options

            </p>
            <p className='Limitless-title-SecondLine'>
                Phasellus sed nisi ac dui interdum semper.
                Etiam consequat fermentum sollicitudin. Fusce vulputate porta faucibus.
                Vivamus nulla tellus, accumsan non efficitur id, pretium quis ante


            </p>
            <div className='paralex-Button-Section'>
                <CustomButton text="Read More" buttonStyle="Fill-style" />
            </div>
            <img src="./limitless/limitless.jpg" />
        </div>
    )
}
