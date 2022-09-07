import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();
    // const handleSubmit = () => {}
    return (
        <AppButton title={title} color="primary" icon="arrow-right"  onPress={handleSubmit}/>
    );
}

export default SubmitButton;