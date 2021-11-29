import { Sidebar } from '../sidebar/Sidebar';
import { NothingSelected } from '../nothing-selected/NothingSelected';
import { NoteScreen } from '../notes/NoteScreen';

export const Main = () => {
    return (
        <>
            <Sidebar />

            <main>

                {/* <NothingSelected /> */}
                <NoteScreen />

            </main>
        </>
    );
};
