import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const TooltipExample = () => {
    return (
        <div>
             <Tooltip title="Delete" placement='right'>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <Box sx={{ width: 500 }}>
                <Grid container justifyContent="center">
                    <Grid item>
                    <Tooltip title="Add" placement="top-start">
                        <Button>top-start</Button>
                    </Tooltip>
                    <Tooltip title="Add" placement="top">
                        <Button>top</Button>
                    </Tooltip>
                    <Tooltip title="Add" placement="top-end">
                        <Button>top-end</Button>
                    </Tooltip>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={6}>
                    <Tooltip title="Add" placement="left-start">
                        <Button>left-start</Button>
                    </Tooltip>
                    <br />
                    <Tooltip title="Add" placement="left">
                        <Button>left</Button>
                    </Tooltip>
                    <br />
                    <Tooltip title="Add" placement="left-end">
                        <Button>left-end</Button>
                    </Tooltip>
                    </Grid>
                    <Grid item container xs={6} alignItems="flex-end" direction="column">
                    <Grid item>
                        <Tooltip title="Add" placement="right-start">
                        <Button>right-start</Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Add" placement="right">
                        <Button>right</Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Add" placement="right-end">
                        <Button>right-end</Button>
                        </Tooltip>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item>
                    <Tooltip title="Add" placement="bottom-start">
                        <Button>bottom-start</Button>
                    </Tooltip>
                    <Tooltip title="Add" placement="bottom">
                        <Button>bottom</Button>
                    </Tooltip>
                    <Tooltip title="Add" placement="bottom-end">
                        <Button>bottom-end</Button>
                    </Tooltip>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default TooltipExample;