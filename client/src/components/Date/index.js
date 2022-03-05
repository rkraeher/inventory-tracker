import React from 'react';


export class TodaysDate extends React.Component {
    constructor() {
        super();
        var today = new Date(),
            date = (today.getMonth() + 1) + '/' + today.getDate()+ '/' + today.getFullYear();
        this.state = {
            date: date
        };
    }
    render() {
        return (
            <div className='date'>
                <h4 name='calendar'>{this.state.date}</h4>
            </div>
        );
    }
}

export default TodaysDate;