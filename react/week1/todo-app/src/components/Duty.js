import React from 'react';

function Duty(props) {
    return (
        <div className={'flex-item'}>
            <img src={props.imgUrl} alt={props.alt} className={'duty-img'}/>
            <p class="alert alert-primary" role="alert">{props.title}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default Duty;