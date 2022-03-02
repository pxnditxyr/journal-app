import { useSelector } from 'react-redux';
import { Sidebar } from '../sidebar/Sidebar';
import { NothingSelected } from '../nothing-selected/NothingSelected';
import { NoteScreen } from '../notes/NoteScreen';

import { State } from '../../interfaces/interfaces';

export const Main = () => {

    const { activeNote } = useSelector( ( state : State ) => state.notes );

    // console.log( activeNote );

    return (
        <>
            <Sidebar />

            <main>
                { 
                    ( activeNote )
                        ? <NoteScreen />
                        : <NothingSelected />
                }
            </main>
        </>
    );
};
