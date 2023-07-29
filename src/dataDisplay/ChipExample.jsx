import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const ChipExample = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <div>
            <Stack sx={{padding: 2}} direction="row" spacing={1}>
                <Chip label="Chip Filled" />
                <Chip label="Chip Outlined" variant="outlined" />
            </Stack>

            <Stack sx={{padding: 2}} direction="row" spacing={1}>
            <   Chip label="Clickable" onClick={handleClick} />
                <Chip label="Clickable" variant="outlined" onClick={handleClick} />
            </Stack>

            <Stack sx={{padding: 2}} direction="row" spacing={1}>
                <Chip label="Deletable" onDelete={handleDelete} />
                <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
            </Stack>
        </div>
    );
};

export default ChipExample;