import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    
    const { active:note } = useSelector(state => state.notes);
    const dispatch = useDispatch();
    
    const [formValues, handleInputChange, reset ] = useForm( note );
    const { date, title, body, url } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
        if( note.id !==  activeId.current ){
            reset( note );
            activeId.current = note.id;
        } 
    }, [note, reset])
    
    useEffect(() => {
        dispatch( activeNote(formValues.id, {...formValues }) );    
    }, [formValues, dispatch])

    return (
        <div className ="notes__main-contend">
            
            <NotesAppBar
                date={ date }
            />

            <div className="notes__content">
                <input
                    autoComplete="off"
                    className="notes__title-input"
                    name="title"
                    onChange={ handleInputChange }
                    placeholder="Some awesome title"
                    type="text" 
                    value={ title }
                />

                <textarea 
                    className="notes__textarea"
                    name="body"
                    onChange={ handleInputChange }
                    placeholder="What happened today"
                    value={ body }
                >

                </textarea>
                
                {
                    (url) &&
                    <div className="notes__image">
                        <img 
                            alt="some thing" 
                            src={url} 
                        />
                    </div>
                }
            </div>
        </div>
    )
}
