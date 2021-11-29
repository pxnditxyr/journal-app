
export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span> September 12, 2020 </span>
            <div>
                <button className="btn">
                    <i className="far fa-add"></i> Picture
                </button>
                <button className="btn">
                    <i className="far fa-save"></i> Save
                </button>
            </div>
        </div>
    );
};
