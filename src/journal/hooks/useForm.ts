import { useState } from 'react';

export const useForm = <T extends Object> ( initialState : T ) => {

    const [ form, setForm ] = useState( initialState );
    const handleInputChange = ( { target } : React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        setForm({
            ...form,
            [ name ]: value,
        });
    };

    const handleTextAreaChange = ( { target } : React.ChangeEvent<HTMLTextAreaElement> ) => {
        const { name, value } = target;
        setForm({
            ...form,
            [ name ]: value,
        });
    };
    const handleReset = () => setForm( initialState );

    const resetForm = ( newState : T = initialState ) => setForm( newState );

    return {
        form,
        handleInputChange,
        handleTextAreaChange,
        handleReset,
        resetForm,
        ...form,
    }
};
