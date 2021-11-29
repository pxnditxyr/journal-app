import { Sidebar } from '../sidebar/Sidebar';
import { NothingSelected } from '../nothing-selected/NothingSelected';

export const Main = () => {
    return (
        <>
            <Sidebar />

            <main>

                <NothingSelected />

            </main>
        </>
    );
};
