import React, { useState } from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
  Paper
} from '@mui/material';

function PostsReview() {

  return (
    <Paper sx={{ padding: '30px', margin: '20px' }}>
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
        align="center">Post Revew</Typography>

      {/*============================= Respensive container =============================*/}
      <Grid container my={4} className='mainContainer'
        direction="row" spacing={1}
        divider={<Divider orientation='vertical' flexItem />}>

        {/*---------------------- filter component section ----------------------*/}
        <Grid item xs={3}>

        </Grid>

        {/*---------------------- Posts component section ----------------------*/}
        <Grid item xs={9} className='Posts'>
          <Typography variant='h4' gutterBottom sx={{
            fontFamily: 'Advent Pro',
            letterSpacing: {
              xs: 0, // 0
              sm: 0, // 600
              md: 0.4, // 900
              lg: 0.75, // 1200
              xl: 1.5, // 1536
            },
            fontSize: '5.2vh', fontWeight: 300
          }}
            align="center">Post Cards</Typography>
          <Box sx={{ padding: '16px' }}>
            <Grid container my={4} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              direction="row"
              alignItems="center"
            >

            </Grid>
          </Box>
        </Grid>

      </Grid>
      {/* ============================================================================== */}

    </Paper>
  );
}

export default PostsReview;