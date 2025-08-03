import React from "react";
import { PostCard } from "./PostCard";
import { data } from "react-router";

export const PostList = () => {
     const posts = [
  {
    user: "Golanginya",
    time: "5 min ago",
    title: "How to patch KDE on FreeBSD?",
    content: "Lorem ipsum dolor sit amet...",
    tags: ["golang", "linux", "overflow"],
    views: 125,
    comments: 15,
    upvotes: 155,
  },
  {
    user: "Linuxoid",
    time: "25 min ago",
    title: "What is a difference between Java nad JavaScript?",
    content: "Lorem ipsum dolor sit amet...",
    tags: ["java", "javascript", "wtf"],
    views: 125,
    comments: 15,
    upvotes: 155,
  },
];
    console.log(data);
    
  return (
    <div className="space-y-4">
      {posts.map((posts, index) => (
        <PostCard {...posts} key={index + 1} />
      ))}
    </div>
  );
};
