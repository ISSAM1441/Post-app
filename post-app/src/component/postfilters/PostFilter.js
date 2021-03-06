import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Divider,
  TextField,
  MenuItem,
  OutlinedInput,
  InputLabel,
  ListItemText,
  Select,
  Checkbox
} from '@mui/material';

import { PostData } from '../postReview/PostsData';
import { Tags, authors } from './FiltersData';
import { PostItems } from '../postReview/PostItems'

const ITEM_HEIGHT = 48;

const ITEM_PADDING_TOP = 2;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 80,
    },
  },
};
function PostFilter({ data }) {
const tempData = []
  {/* ========================== on filter by Author handler ======================== */ }
  const [authorName, setAuthorName] = useState();
  const handleAuthorFilterChange = (event) => {
    if (event.target.value === 'All') {
      data.setData(data.PostData)
    } else {
      const newItems = []
      data.PostData.forEach((post) => {
        if (post.author.includes(event.target.value)) {
          newItems.push(post)
        }
      })
      data.setData(newItems);

    }
    tempData = data.items
    setAuthorName(event.target.value);
  };

  {/* ====================== on check filter by tags handler ====================== */ }
  const [tagName, setTagName] = useState([]);
  const handleTagFilterChange = (event) => {

    const {
      target: { value },
    } = event;
    setTagName(
      typeof value === 'string' ? value.split(',') : value,
    );

    if (value.length > 0) {
      const newItems = []
      data.items.forEach((post) => {
        value.forEach((element) => {
          if (post.tag === element) {
            newItems.push(post)
          }
        })
      })
      data.setData(newItems);
    } else {
      data.setData(data.PostData);
    }

  };

  return (
    <div className='filter'>

      {/*---------------------- Component Tile ----------------------*/}
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
        align="center">Filter Section</Typography>

      <Grid container my={4}
        direction="column"
        padding={2}
        rowSpacing={6}
        divider={<Divider orientation='vertical' flexItem />}>

        {/*------------------ Filter by user selector -----------------*/}
        < Grid item xs>
          <TextField label='Filter By user' select fullWidth
            value={authorName}
            onChange={handleAuthorFilterChange}
          >
            {authors.map((author) => (
              <MenuItem value={author.name}>{author.name}</MenuItem>
            ))}
          </TextField>

        </Grid>

        {/*---------------- Filter by tags Multi-selector ---------------*/}
        < Grid item xs={10}>
          <InputLabel fullWidth helperText='Fill free to choose  one or more Tags'>All Tags</InputLabel>
          <Select width='150px' fullWidth
            labelId="filter_by_tag_name"
            multiple
            value={tagName}
            onChange={handleTagFilterChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {Tags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                <Checkbox checked={tagName.indexOf(tag) > -1} />
                <ListItemText primary={tag} />
              </MenuItem>
            ))}
          </Select>

        </Grid>

      </Grid>
    </div>

  )
}

export default PostFilter;