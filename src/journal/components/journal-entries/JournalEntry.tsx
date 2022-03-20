import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../actions/notes';

interface Props {
    id: string;
    content: string;
    title: string;
    imgUrl: string;
    createdAt: number;
}

export const JournalEntry = ( { id, content, title, imgUrl, createdAt } : Props ) => {
    const noteDate = moment( createdAt );
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch( setActiveNote( id, { id, content, title, imgUrl, createdAt } ) )
    };

    return (
        <article 
            className="journal__entry pointer"
            onClick={ handleEntryClick }
        >
            <picture 
                className="journal__entry-picture"
                style={{
                    backgroundImage: `url( ${ imgUrl ? imgUrl : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghibli-vecino-totoro-miyazaki-netflix-1579597040.jpg?crop=0.563xw:1.00xh;0.220xw,0&resize=640:*" } )`,
                }}
            ></picture> 
            <section className="journal__entry-body">
                <p className="journal__entry-title"> { title } </p>
                <p className="journal__entry-content"> { content } </p>
            </section>
            <section className="journal__entry-date-box">
                <p> { noteDate.format( 'dddd' ) } </p>
                <span> { noteDate.format( 'Do' ) } </span>
            </section>
        </article>
    );
};
