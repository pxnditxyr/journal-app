import { useSelector } from 'react-redux';
import { State } from '../../interfaces/interfaces';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    const { notes } = useSelector( ( state : State ) => state.notes );
    
    return (
        <div className="journal__entries">
            {
                notes.map( note => (
                    <JournalEntry 
                        key={ note.id }
                        { ...note }
                    />
                ))
            }
        </div>
    );
};
