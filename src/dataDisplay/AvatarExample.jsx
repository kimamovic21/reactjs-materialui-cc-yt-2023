import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
}));
  
const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));


const AvatarExample = () => {
    return (
        <div>
            <Stack sx={{padding: 2}} direction="row" spacing={2}>
                <Avatar 
                    sx={{width: 70, height: 70}}
                    alt="Remy Sharp" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                />
                <Avatar
                    sx={{width: 80, height: 80}}
                    alt="Travis Howard" 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                />
                <Avatar 
                    sx={{width: 90, height: 90}}
                    alt="John Doe" 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                />
                <Avatar 
                    sx={{width: 100, height: 100}}
                    alt="John Doe" 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                />
            </Stack>

            <Stack sx={{padding: 2}} direction="row" spacing={2}>
                <Avatar>
                    H
                </Avatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                    N
                </Avatar>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    OP
                </Avatar>
            </Stack>

            <Stack sx={{padding: 2}} direction="row" spacing={2}>
                <Avatar>
                    <FolderIcon />
                </Avatar>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <PageviewIcon />
                </Avatar>
                <Avatar sx={{ bgcolor: green[500] }}>
                    <AssignmentIcon />
                </Avatar>
            </Stack>

            <AvatarGroup sx={{padding: 2}} max={4}>
                <Avatar 
                    alt="Remy Sharp" 
                    src="/static/images/avatar/1.jpg" 
                />
                <Avatar 
                    alt="Travis Howard" 
                    src="/static/images/avatar/2.jpg" 
                />
                <Avatar 
                    alt="Cindy Baker" 
                    src="/static/images/avatar/3.jpg" 
                />
                <Avatar 
                    alt="Agnes Walker" 
                    src="/static/images/avatar/4.jpg" 
                />
                <Avatar 
                    alt="Trevor Henderson" 
                    src="/static/images/avatar/5.jpg" 
                />
            </AvatarGroup>

            <Stack sx={{padding: 2}} direction="row" spacing={2}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </StyledBadge>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                    <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    }
                >
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </Badge>
            </Stack>
        </div>
    );
};

export default AvatarExample;