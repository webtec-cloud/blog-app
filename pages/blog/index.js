import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: { data: data },
  };
};

const index = ({ data }) => {
  return (
    <div>
      {data.slice(0, 6).map((item) => (
        <Link href={`/blog/${item.id}`}>
          <div className="card">
            <h3>{item.id}</h3>

            <h2>{item.title}</h2>
          </div>
        </Link>
      ))}{" "}
    </div>
  );
};

export default index;
