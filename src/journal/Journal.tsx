import { AppRouter } from './routers/AppRouter';
import { StoreProvider } from './store/StoreProvider';

export const Journal = () => {
    return (
        <StoreProvider>
            <div className="journal__main-container">
                <AppRouter />
            </div>
        </StoreProvider>
    );
};
