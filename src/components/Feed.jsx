import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';

export default function Feed() {
    return (
        <Box p={2} flex={4} bgcolor="lightblue">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </Box>
    )
}
