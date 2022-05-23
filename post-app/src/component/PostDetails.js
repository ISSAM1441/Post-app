import React from 'react';

import {
  Typography,
  Grid,
  Divider,
  Stack,
  Paper,
  IconButton,
  TextareaAutosize,
  Box,
  List,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

function PostDetails() {
  
  return (
    <Paper sx={{padding: '30px', margin: '20px'}}>
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
        align="center">Post Details</Typography>

      {/*============================= Respensive container =============================*/}
      <Grid container my={4} className='mainContainer'
        direction="row" spacing={1}
        divider={<Divider orientation='vertical' flexItem />}>

        {/*---------------------- filter component section ----------------------*/}
        <Grid item xs={9} className='Posts'>
          <Typography variant='h4' gutterBottom sx={{

            letterSpacing: {
              xs: 0, // 0
              sm: 0, // 600
              md: 0.4, // 900
              lg: 0.75, // 1200
              xl: 1.5, // 1536
            }, color: 'black',
            fontSize: '3.2vh', fontWeight: 500
          }}
            align="center"></Typography>
          <img alt="Post" className='center'>
          </img>
          <Typography variant='h6' color='GrayText.secondary' sx={{ color: '#555', fontFamily: 'PT Sans, sans-serif' }}>
            
          </Typography>

          <TextareaAutosize id='userPost'
            maxRows={4}
            aria-label="Post comment"
            placeholder="Give us your opinion on this post..."
            defaultValue=""
            style={{ margin: '50px 20px 15px', padding: '10px', width: '95%', height: '10vh', borderRadius: '5px' }}
          />

          <Stack spacing={2} direction='row'>

            <IconButton color='primary' aria-label='send' >
              <SendIcon />
            </IconButton>
          </Stack>

        </Grid>

        {/*---------------------- Posts component section ----------------------*/}
        <Grid item xs={3} className='Posts'>
          <Typography variant='h4' gutterBottom sx={{
            fontFamily: 'Advent Pro',
            letterSpacing: {
              xs: 0, // 0
              sm: 0, // 600
              md: 0.4, // 900
              lg: 0.75, // 1200
              xl: 1.5, // 1536
            },
            fontSize: '3.2vh', fontWeight: 300
          }}
            align="center">Comments</Typography>
          <Box sx={{ padding: '16px' }}>
            <Grid container my={4} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              direction="row"
              alignItems="center"
            >
              <List>

              </List>
            </Grid>
          </Box>
        </Grid>

      </Grid>
      {/* ============================================================================== */}

    </Paper>
  )
}

export default PostDetails