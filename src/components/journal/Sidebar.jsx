import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth)

    const handleLoguot = () => {
        dispatch( startLogout() )
    }

    const handleNewNote = () => {
        dispatch( startNewNote() )
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar"  >
                <h3>
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>

                <button 
                    className="btn"
                    onClick={ handleLoguot }
                >
                    Logout
                </button>
            </div>

            <div 
                className="journal__new-entry" 
                onClick={ handleNewNote }
            >
                <i className="far fa-calendar-plus fa-2x" ></i>
                <p className="mt-1">
                    New entry
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}
