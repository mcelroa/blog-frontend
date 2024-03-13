import React from "react";

export default function Post({ post }) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </>
  );
}
