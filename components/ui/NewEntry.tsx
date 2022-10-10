import { ChangeEvent, useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';/*
si en vez de esto pongo 
import AddIcon from '@mui/icons-material/AddBoxOutlined';
igual funciona y se llama asi el componente AddIcon, porque es la expo por defecto de ese path
*/
import { Cookies } from 'next/dist/server/web/spec-extension/cookies';

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value);

    }

    const onSave = () => {
        if( inputValue.length === 0) return;
        console.log({ inputValue})
    }


    return (
        <>
            <Box sx={{ marginBottom: 2, paddingX: 1 }}>
                {
                    isAdding ? (
                        <>
                            <TextField
                                fullWidth
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                placeholder='Nueva Entrada'
                                multiline
                                autoFocus
                                label='Nueva entrada'
                                helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor'}
                                error={ inputValue.length <= 0 && touched }
                                id='nueva-entrada'
                                variant='outlined'
                                value={inputValue}
                                onChange={ onTextFieldChanged }
                                onBlur={ () => setTouched( true )}
                            />

                            <Box display='flex' justifyContent='space-between' >
                                <Button
                                    variant='text'
                                    color='error'
                                    endIcon={<CancelOutlinedIcon />}
                                    onClick={() => setIsAdding(false)}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    endIcon={<SaveOutlinedIcon />}
                                    onClick={ onSave }
                                    
                                >
                                    Guardar
                                </Button>

                            </Box>
                        </>
                    )
                        : (
                            <Button
                                startIcon={<AddBoxOutlinedIcon />}
                                fullWidth
                                variant='outlined'
                                onClick={() => setIsAdding(true)}
                            >
                                Agregar tarea
                            </Button>

                        )
                }

            </Box>


        </>
    )
};
