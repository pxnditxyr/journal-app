import { Provider } from 'react-redux';
import { store } from './store';

interface StoreProviderProps {
    children: JSX.Element | JSX.Element[];
}



export const StoreProvider = ( { children } : StoreProviderProps ) => {

    return (
        <Provider
            store={ store }
        >
            { children }
        </Provider>
    )
}
