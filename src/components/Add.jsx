import { Avatar, Box, Fab, Modal, Tooltip, Typography, styled, TextField, Stack, ButtonGroup, Button } from '@mui/material';
import { Add as AddIcon, DateRange, EmojiEmotions, PersonAdd, PhotoLibrary, VideoCameraFront } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // height: 400,
    bgcolor: 'background.paper',
    borderRadius: '1rem',
    boxShadow: 24,
    padding: '2rem 1rem'
};


const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    margin: '1rem 0'
})

export default function Add() {
    const [open, setOpen] = useState(!false);
    return (
        <>
            <Tooltip onClick={() => setOpen(true)} title="Add Post" sx={{ position: 'fixed', right: '1rem', bottom: '1rem' }}>
                <Fab color='primary'>
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box style={style} bgcolor={"background.default"} color={'text.primary'}>
                    <Typography variant='h6' color='gray' textAlign='center'>
                        Create Post
                    </Typography>

                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />

                        <Typography variant='p' fontWeight={500}>John Doe</Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />

                    <Stack sx={{ mt: 2, mb: 3 }} direction='row' gap={2}>
                        <EmojiEmotions color='primary' />
                        <VideoCameraFront color='secondary' />
                        <PhotoLibrary color='success' />
                        <PersonAdd color='error' />
                    </Stack>

                    <ButtonGroup fullWidth variant="contained" aria-label="outlined button group">
                        <Button>Post</Button>
                        <Button sx={{ width: '100px' }}><DateRange /></Button>
                    </ButtonGroup>

                </Box>
            </Modal>
        </>
    )
}
