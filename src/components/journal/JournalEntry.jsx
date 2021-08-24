import React from 'react'
import moment from 'moment';

export const JournalEntry = ({ id, date, title, body, url }) => {
    
    const noteDate = moment(date);
    console.log(noteDate.format('dddd'));

    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture" 
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://spng.pngfind.com/pngs/s/2-24642_imagenes-random-png-cosas-random-png-transparent-png.png)'
                }}
            ></div>

            <div className="journal__entry-body" >
                <p className="journal__entry-title" >
                    {title}
                </p>
                <p className="journal__entry-content" >
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>
        </div>
    )
}
