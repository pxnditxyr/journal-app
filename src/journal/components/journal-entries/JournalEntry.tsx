
export const JournalEntry = () => {
    return (
        <article className="journal__entry pointer">
            <picture 
                className="journal__entry-picture"
                style={{
                    backgroundImage: 'url( https://m.media-amazon.com/images/I/21u2JoNdIqL.jpg )',
                }}
            ></picture>
            <section className="journal__entry-body">
                <p className="journal__entry-title">
                    New Day
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, quidem.
                </p>
            </section>
            <section className="journal__entry-date-box">
                <p>
                    Jan
                </p>
                <span>
                    12
                </span>
            </section>
        </article>
    );
};
