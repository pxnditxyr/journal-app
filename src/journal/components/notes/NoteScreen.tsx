import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <>
            <div className="notes__main-container">
                <NotesAppBar />
                <div className="notes__content">
                    <input
                        className="notes__title-input"
                        placeholder="Enter awesome title"
                        type="text"
                        autoComplete="off"
                    />
                    <textarea
                        placeholder="What happened today"
                        className="notes__textarea"
                    ></textarea>
                    <picture className="notes__image">
                        <img
                            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghibli-vecino-totoro-miyazaki-netflix-1579597040.jpg?crop=0.563xw:1.00xh;0.220xw,0&resize=640:*"
                            alt="totoro"
                        />
                    </picture>
                </div>
            </div>
        </>
    );
};
