import React, { useState } from 'react'

import PostCards from "./PostCards";


export function PostItems({ data }) {

  return (
    <>
      {data.items.map((post, index) => (
        <PostCards key={index} post={post}></PostCards>
      ))}
    </>

  )
}


/** const posts = data.map((post, index) => (
        <PostCards key={index} post={post}></PostCards>
            ))

  const [listItems, setListItems] = useState(posts)

  const handleUserFilter = () => {
    setListItems(data.map((post, index) => (
    (<PostCards key={index} post={post}></PostCards>))
  ))
  }
  return (
    <>
    {data.map((post, index) => (
        <PostCards key={index} post={post}></PostCards>
            ))}
    </>
      
  ) */