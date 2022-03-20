import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote, startDeletingNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { State } from '../../interfaces/interfaces';
import { NotesAppBar } from './NotesAppBar';
import { defaultNote } from '../../helpers/defaultValues';


export const NoteScreen = () => {

    const dispatch = useDispatch();
    
    const { activeNote : note } = useSelector( ( state : State ) => state.notes );

    const { title, content, handleInputChange, handleTextAreaChange, resetForm, form } = useForm( note || defaultNote );

    const activeId = useRef( note?.id );

    useEffect( () => {
            if ( note?.id !== activeId.current ) {
                resetForm( note || defaultNote );
                activeId.current = note?.id;
            }
    }, [ note, resetForm ] );

    useEffect( () => {
        dispatch( setActiveNote( form.id || "", {...form } ) );
    }, [ form, dispatch ]);

    const handleDelete = () => {
        if ( note )
            dispatch( startDeletingNote( note.id ) )
    }

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
                        name="title"
                        onChange={ handleInputChange }
                        value={ title }
                    />
                    <textarea
                        placeholder="What happened today"
                        className="notes__textarea"
                        name="content"
                        onChange={ handleTextAreaChange }
                        value={ content }
                    ></textarea>
                    <picture className="notes__image">
                        <img
                            src={ note?.imgUrl || "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghibli-vecino-totoro-miyazaki-netflix-1579597040.jpg?crop=0.563xw:1.00xh;0.220xw,0&resize=640:*" }
                            alt="totoro"
                        />
                    </picture>
                </div>
                <button 
                    className="btn btn-danger btn-float-right"
                    onClick={ handleDelete }
                >
                    🗑
                </button>
            </div>
        </>
    );
};
