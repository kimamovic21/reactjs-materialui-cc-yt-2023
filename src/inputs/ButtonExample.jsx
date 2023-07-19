import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const ButtonExample = () => {
    return (
        <div>
            <Button 
                href='https://www.google.com' 
                variant="text" 
                target='_blank'>
                    Text
            </Button>

            <Button variant="contained">Contained</Button>

            <Button variant="outlined">Outlined</Button>

            <Button variant="outlined" color='error' startIcon={<DeleteIcon />}>
                Delete
            </Button>

            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    );
};

export default ButtonExample;