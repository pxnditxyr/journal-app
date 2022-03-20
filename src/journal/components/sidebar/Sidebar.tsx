import { useDispatch, useSelector } from 'react-redux';
import { JournalEntries } from '../journal-entries/JournalEntries';
import { startSignOut } from '../../actions/auth';
import { State } from '../../interfaces/interfaces';
import { createNewNote } from '../../actions/notes';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( ( state : State ) => state.auth )
    

    const handleLogout = () => {
        dispatch( startSignOut() );
    };

    const handleAddNewEntry = () => {
        dispatch( createNewNote() )
    };

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="">
                    <i className="fas fa-cat"></i>
                    <span> @{ name } </span>
                </h3>
                <button 
                    className="btn"
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>
            <div 
                className="journal__new-entry pointer"
                onClick={ handleAddNewEntry }
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <span className="mt-5"> New Entry </span>
            </div>
            <JournalEntries />
        </aside>
    );
};
