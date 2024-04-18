import { FC } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import { red } from '@mui/material/colors';
import { FieldError } from 'react-hook-form';

interface ErrorProps {
    error: FieldError | undefined; // Menggunakan tipe FieldError dari react-hook-form
}

const GetErrorMessage = (type: string) => {
    switch (type) {
        case 'minLength':
            return 'Password must be at least 8 characters long';
        case 'pattern':
            return 'Password must contain at least one letter and one number';
        case 'required':
            return 'Password is required';
        case 'notMixed':
            return 'Password must contain a combination of letters and numbers';
        default:
            return ''; // Kembalikan string kosong jika jenis tidak dikenali
    }
}

const FormError: FC<ErrorProps> = ({ error }) => {
    const message = error?.type ? GetErrorMessage(error.type) : '';
    
    return (
        <>
            {message && (
                <FormHelperText sx={{ color: red[500], margin: 0 }}>
                    {message}
                </FormHelperText>
            )}
        </>
    );
}

export default FormError;
