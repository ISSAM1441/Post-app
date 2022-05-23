import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Typography,
  Grid,
  Divider,
  Stack,
  Avatar,
  Paper,
  IconButton,
  TextareaAutosize,
  Box,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { PostData } from './postReview/PostsData';
import { userComments } from './postDetails/CommentsData';


function PostDetails() {
  let { postId } = useParams();
  const post = (PostData[{ postId }.postId - 1])

  /*---------------------- Adding new comments handler ----------------------*/
  const [Comments, setComments] = useState(userComments);
  const AddComment = () => {
    const userPost = document.getElementById('userPost').value
    const date = new Date();

    // formatting new comment object --------------------------------------
    const newComment = {
      id: Comments[Comments.length - 1].id + 1,
      postId: post.id,
      User: 'You',
      message: userPost,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
    //----------------------------------------------------------------------

    setComments(Comments => [...Comments, newComment]);
  }

  // Generating & formatting comments data ---------------------------------
  const listComments = Comments.map((comment, index) => (
    (comment.postId === post.id) ?
      <ListItem sx={{
        margin: '5px', width: '100%', borderBottom: 'solid 1px #d5d5d5'
      }}>
        <Avatar src={comment.avatar}>
        </Avatar>
        <ListItemText
          sx={{ margin: '0 20px' }}
          key={index}
          primary={comment.User}
          secondary={comment.message}>
        </ListItemText>
      </ListItem>
      : null
  ))
  //------------------------------------------------------------------------

  return (
    <Paper sx={{ padding: '30px', margin: '20px' }}>

      {/*---------------------- Page Tile ----------------------*/}
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

      {/*============================= Main container =============================*/}
      <Grid container my={4} className='mainContainer'
        direction="row" spacing={1}
        divider={<Divider orientation='vertical' flexItem />}>

        {/*---------------------- Post details component section ----------------------*/}
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
            align="center">{post.title}</Typography>
          <img alt="Post" src={post.img} className='center'>
          </img>
          <Typography variant='h6' color='GrayText.secondary' sx={{ color: '#555', fontFamily: 'PT Sans, sans-serif' }}>
            {post.description}
          </Typography>

          <TextareaAutosize id='userPost'
            maxRows={4}
            aria-label="Post comment"
            placeholder="Give us your opinion on this post..."
            defaultValue=""
            style={{ margin: '50px 20px 15px', padding: '10px', width: '95%', height: '10vh', borderRadius: '5px' }}
          />

          {/*---------------------- Add New Commments component section ----------------------*/}
          <Stack spacing={2} direction='row'>

            <IconButton color='primary' aria-label='send' onClick={AddComment}>
              <SendIcon />
            </IconButton>
          </Stack>

        </Grid>

        {/*---------------------- List of Comments component section ----------------------*/}
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

                {listComments}
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