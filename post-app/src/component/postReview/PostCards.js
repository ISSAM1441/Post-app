import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Rating,
  Tooltip
} from '@mui/material';

function PostCards({ post }) {

  //{/*---------------------- OnChange Rating handing ----------------------*/ }
  const [rating, setRating] = useState(null);
  const ratingChange = (newValue) => {
    setRating(newValue.target.value);
  }

  /* =================== rounding views and comments counter =================== */
  if ((post.views >= 1000) && (post.views < 1000000)) {
    post.views = post.views / 1000 + " K"
  } else if ((post.views >= 1000000) && (post.views < 1000000000)) {
    post.views = post.views / 1000000 + " M"
  }

  if ((post.comments >= 1000) && (post.comments < 1000000)) {
    post.comments = (post.comments / 1000).toFixed(2) + " K"
  } else if ((post.comments >= 1000000) && (post.comments < 1000000000)) {
    post.comments = (post.comments / 1000000).toFixed(2) + " M"
  }
  /* =========================================================================== */

  return (
    //=================================== List of Posts ===================================

    < Grid item xs={4} >
      {/*============================= Post Card component =============================*/}

      < Card >
        {/*---------------- On hover imga description ----------------*/}
        <Tooltip title={post.title} arrow enterDelay={500} leaveDelay={200}>
          {/*---------------------- Post Image ----------------------*/}
          < CardMedia className='cardImg'
            component='img'
            height='180'
            image={post.img}
            alt='post image'
          />
        </Tooltip>
        <CardContent>
          {/*---------------------- Post Title ----------------------*/}
          <Typography gutterBottom variant='h5' component='div' noWrap sx={{ color: '#555', fontFamily: 'Telex' }}>
            {post.title}
          </Typography>

          {/*---------------------- Post Description ----------------------*/}
          <Typography variant='body2' color='GrayText.secondary' noWrap sx={{ color: '#555', fontFamily: 'PT Sans, sans-serif' }}>
            {post.description}
          </Typography>

          {/*---------------------- Post Auther ----------------------*/}
          <Typography variant='overline' color='GrayText.secondary' sx={{ color: '#444', fontFamily: 'Telex' }}>
            By {post.author}
          </Typography>
        </CardContent>

        {/*---------------------- Post interraction Buttons ----------------------*/}
        < CardActions >
          <Grid container direction="row" spacing={1} justifyContent="flex-end">

            <Grid item xs={2}>
              <Typography variant='body2' color='GrayText.secondary'>
                {post.views}
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant='body2' color='GrayText.secondary'>
                {post.comments}
              </Typography>
            </Grid>
            <Grid item xs='auto'>
              <Rating value={rating} onChange={ratingChange} />
            </Grid>

            <Grid item xs='auto'>
              <Link to={`/post/${post.id}`}>Read more</Link>
            </Grid>

          </Grid>
        </CardActions >

      </Card >

    </Grid >
  )
}

export default PostCards;