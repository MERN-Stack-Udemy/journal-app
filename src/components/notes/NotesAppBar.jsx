import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector} from 'react-redux';
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = ({ date }) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    }

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('D MMMM YYYY')}</span>

            <div>
                <button 
                    className="btn"
                >
                    Picture
                </button>
                
                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
