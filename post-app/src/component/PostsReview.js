import React, { useState } from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
  Paper
} from '@mui/material';

import PostFilter from "./postfilters/PostFilter";
import PostCards from "./postReview/PostCards";
import { PostData } from './postReview/PostsData';
import { Tags, authors } from './postfilters/FiltersData';

export const PostItems = PostData;

export function renderPostData(author, tag) {
  const listItems = PostData.filter((post, index) =>
    (post.author.includes(author)) ?
      <PostCards key={index} post={post}></PostCards> : null
  )

  return listItems
}

const listItems = PostItems.map((post, index) => (
  <PostCards key={index} post={post}></PostCards>))

function PostsReview() {

  {/* ========================== Render Data ======================== */ }
  const [postItems, setPostItems] = useState(PostData);
  const handlePostItemsChange = (event) => {
    (event.target.value === 0) ?
      setAuthorName(authors) :
      setAuthorName(event.target.value);
  };

  {/* ========================== on filter by Author handler ======================== */ }
  const [filterByAuthor, setAuthorName] = useState(authors);
  const handleAuthorFilterChange = (event) => {
    (event.target.value === 0) ?
      setAuthorName(authors) :
      setAuthorName(event.target.value);
  };

  {/* ====================== on check filter by tags handler ====================== */ }
  const [filterByTags, setTagName] = useState(Tags);
  const handleTagFilterChange = (event) => {
    const { target: { value }, } = event;
    (value !== "" || null) ?
      setTagName(
        typeof value === 'string' ? value.split(',') : value,
      ) : setTagName(Tags)
  };

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
        align="center">Post Revew</Typography>

      {/*============================= Main container =============================*/}
      <Grid container my={4} className='mainContainer'
        direction="row" spacing={1}
        divider={<Divider orientation='vertical' flexItem />}>

        {/*---------------------- filter component section ----------------------*/}
        <Grid item xs={3}>
          <PostFilter />

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
              {listItems}

            </Grid>
          </Box>
        </Grid>

      </Grid>
      {/* ============================================================================== */}

    </Paper>
  );
}

export default PostsReview;