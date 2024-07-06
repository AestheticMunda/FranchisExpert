"use client";
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CommentIcon from '@mui/icons-material/Comment';
import CloseIcon from '@mui/icons-material/Close';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [isCommentIcon, setIsCommentIcon] = React.useState(true);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsCommentIcon(!isCommentIcon);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsCommentIcon(true); // Reset to comment icon when popover is closed
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='fixed bottom-10 left-10 z-10'>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        className='rounded-full'
        sx={{
          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: 'black',
          },
        }}
      >
        {isCommentIcon ? <CommentIcon /> : <CloseIcon />}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        className='absolute -top-16'
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
