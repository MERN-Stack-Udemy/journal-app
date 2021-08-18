import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className ="notes__main-contend">
            
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text" 
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="What happened today"
                    className="notes__textarea"
                >

                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqF2wRRfu6aPbs6YjofxfPmcEWQI-A4Ig6zA&usqp=CAU" 
                        alt="some image" 
                    />
                </div>
            </div>
        </div>
    )
}
