import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
import { defaultNote } from '../../helpers/defaultValues';
import { State } from '../../interfaces/interfaces';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { activeNote } = useSelector( ( state : State ) => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote( activeNote || defaultNote ) );
    }

    const handlePictureClick = () => {
        const fileInput = document.querySelector( '#fileSelector' ) as HTMLInputElement;
        fileInput.click();
    }

    const handleFileChange = ( event : React.ChangeEvent<HTMLInputElement> ) => {
        const file = event.target.files![ 0 ];
        if ( file ) {
            dispatch( startUploading( file ) )
        }
    }

    return (
        <div className="notes__appbar">
            <span> September 12, 2020 </span>
            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
                accept="image/*"
            />
            <div>
                <button 
                    className="btn"
                    onClick={ handlePictureClick }
                >
                    <i className="far fa-add"></i> Picture
                </button>
                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                    <i className="far fa-save"></i> Save
                </button>
            </div>
        </div>
    );
};
