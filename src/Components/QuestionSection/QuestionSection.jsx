import './QuestionSection.css'

import React from 'react'
import CustomButton from '../Share/CustomButton/CustomButton'

export default function QuestionSection() {
    return (
        <div className='question-continer'>
            <p>Do you like this awesome WordPress theme?
            </p>
            <CustomButton text="DOWNLOAD NOW" buttonStyle="Fill-style" />
        </div>
    )
}
