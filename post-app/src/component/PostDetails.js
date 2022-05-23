import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

import {
  Typography,
  Grid,
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
      <ListItem className='ListItem'>
        <Avatar src={comment.avatar}>
        </Avatar>
        <ListItemText
          className='ListItemText'
          key={index}
          primary={comment.User}
          secondary={comment.message}>
        </ListItemText>
      </ListItem>
      : null
  ))
  //------------------------------------------------------------------------

  return (
    <Paper className='Paper'>

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
      <Grid container my={2}
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start">

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



          {/*---------------------- Add New Commments component section ----------------------*/}
          <Stack spacing={2} direction='row' className='sendButton'>
            <TextareaAutosize id='userPost' className='CommentTextArea'
              maxRows={4}
              aria-label="Post comment"
              placeholder="Give us your opinion on this post..."
              defaultValue=""
            />
            <IconButton className='sendButton' aria-label='send' onClick={AddComment}>
              <SendIcon className='sendButtonIcon' />
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
          <Box sx={{ padding: '0 16px' }}>
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