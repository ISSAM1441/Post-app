import React from 'react'

import {
    Typography,
    Paper,
} from '@mui/material';

function ErrorPage() {
    return (
        <Paper sx={{margin: '10vh 20vh', padding: '80px 50px 180px'}}>
            <Typography variant='h1' gutterBottom sx={{
                letterSpacing: {
                    xs: 0, // 0
                    sm: 0, // 600
                    md: 0.4, // 900
                    lg: 0.75, // 1200
                    xl: 1.5, // 1536
                },
                fontSize: '5.2vh', fontWeight: 200, borderBottom: '1px solid #d7d7d7'
            }}
                align="center">Page Not Found</Typography>
        </Paper>
    )
}

export default ErrorPage