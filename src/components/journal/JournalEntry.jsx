import React from 'react'

export const JournalEntry = ({entry}) => {
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
                    A perfect day
                </p>
                <p className="journal__entry-content" >
                    Velit do ad excepteur velit laborum ullamco laborum elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>21</h4>
            </div>
        </div>
    )
}
