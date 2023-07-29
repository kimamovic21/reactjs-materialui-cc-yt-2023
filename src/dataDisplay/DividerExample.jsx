import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

const style = {
    margin: 2,
    border: '1px solid blue',
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const DividerExample = () => {
    return (
        <div>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Drafts" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Spam" />
                </ListItem>
            </List>

            <List sx={{style}}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List>

            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 2, padding: 2 }}>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                        Toothbrush
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                        $4.50
                        </Typography>
                    </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                    just down the hall.
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                    Select type
                    </Typography>
                    <Stack direction="row" spacing={1}>
                    <Chip label="Extra Soft" />
                    <Chip color="primary" label="Soft" />
                    <Chip label="Medium" />
                    <Chip label="Hard" />
                    </Stack>
                </Box>
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Button>Add to cart</Button>
                </Box>
            </Box>

            <Box
                sx={{
                margin: 2,
                display: 'flex',
                alignItems: 'center',
                width: 'fit-content',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                bgcolor: 'background.paper',
                color: 'text.secondary',
                '& svg': {
                    m: 1.5,
                },
                '& hr': {
                    mx: 0.5,
                },
                }}
            >
                <FormatAlignLeftIcon />
                <FormatAlignCenterIcon />
                <FormatAlignRightIcon />
                <Divider orientation="vertical" flexItem />
                <FormatBoldIcon />
                <FormatItalicIcon />
            </Box>
        </div>
    );
};

export default DividerExample;
