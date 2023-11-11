"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = (props) => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((item) => (
    <article className={props.className} key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
