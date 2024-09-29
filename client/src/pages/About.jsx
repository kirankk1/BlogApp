import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto p-3 text-center ">
        <div >
          <h1 className="text-3xl font-semibold text-center my-7">About Kiran's Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to my blog! I'm Kiran Kumar, a software engineer and MERN
              stack developer with a passion for learning and sharing knowledge.
              This blog is a collection of my thoughts, experiences, and
              insights on various topics related to technology, programming, and
              personal growth.
            </p>
            <p>
              I started this blog as a way to document my learning journey and
              share my knowledge with others. I hope that my blog will be a
              valuable resource for anyone looking to learn more about
              technology and programming.
            </p>
            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
