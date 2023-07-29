import React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/material';

const BadgeExample = () => {
    return (
        <div>
           <Stack sx={{padding: 2}} spacing={2} direction="row">
                <Badge badgeContent={4} color="secondary">
                    <MailIcon color="action" />
                </Badge>
                <Badge badgeContent={4} color="success">
                    <MailIcon color="action" />
                </Badge>
            </Stack>

            <Box sx={{ color: 'action.active', padding: 2 }}>
                <Badge color="secondary" variant="dot">
                    <MailIcon />
                </Badge>
            </Box>
        </div>
    );
};

export default BadgeExample;