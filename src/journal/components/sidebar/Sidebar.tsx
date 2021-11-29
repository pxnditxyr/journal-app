import { JournalEntries } from '../journal-entries/JournalEntries';

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="">
                    <i className="fas fa-cat"></i>
                    <span> @yuki </span>
                </h3>
                <button className="btn">
                    Logout
                </button>
            </div>
            <div className="journal__new-entry pointer">
                <i className="far fa-calendar-plus fa-5x"></i>
                <span className="mt-5"> New Entry </span>
            </div>
            <JournalEntries />
        </aside>
    );
};
