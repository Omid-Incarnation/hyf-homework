import React from 'react';
import Duty from './Duty';
import DutiesData from './DutiesData';

function ToDoList() {
    const ArryOfDuties = DutiesData.map(duty => <Duty
        key={duty.id}
        imgUrl={duty.imgUrl}
        alt={duty.alt}
        title={duty.title}
        date={duty.date}/>)
    return (
        <div className={"flex-container"}>
            {ArryOfDuties}
        </div>
    )
}

export default ToDoList;