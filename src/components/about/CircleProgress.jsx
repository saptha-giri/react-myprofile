import React from 'react';

import { Typography, CircularProgress } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const CircleProgress = ({ value }) => {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" color="primary" size={95} thickness={4} value={value} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="p">{`${value}%`}</Typography>
            </Box>
        </Box>
    )
}

export default CircleProgress;