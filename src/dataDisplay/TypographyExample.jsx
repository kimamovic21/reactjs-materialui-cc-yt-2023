import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const TypographyExample = () => {
    return (
        <div>
            <Box sx={{margin:2, width: '100%', maxWidth: 500}}>
                <Typography variant='h1' gutterBottom>This is an h1</Typography>
                <Typography variant='h2'>This is an h2</Typography>
                <Typography variant='h3'>This is an h3</Typography>
                <Typography variant='h4'>This is an h4</Typography>
                <Typography variant='h5'>This is an h5</Typography>
                <Typography variant='h6'>This is an h6</Typography>
                <Typography variant='subtitle1'>Subtitle 1</Typography>
                <Typography variant='subtitle2'>Subtitle 2</Typography>
            </Box>

            <Divider />

            <Box sx={{ margin:2, width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant="h2" gutterBottom>
                    h2. Heading
                </Typography>
                <Typography variant="h3" gutterBottom>
                    h3. Heading
                </Typography>
                <Typography variant="h4" gutterBottom>
                    h4. Heading
                </Typography>
                <Typography variant="h5" gutterBottom>
                    h5. Heading
                </Typography>
                <Typography variant="h6" gutterBottom>
                    h6. Heading
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>
        </div>
    );
};

export default TypographyExample;