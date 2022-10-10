import React from "react";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        article: curElem.id.toString(),
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.article;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  return {
    props: { data: data },
  };
};

const article = ({ data }) => {
  return (
    <div>
      <h3>{data.id}</h3>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default article;
