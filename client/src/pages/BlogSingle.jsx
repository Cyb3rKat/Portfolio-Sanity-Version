import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import client from "../lib/client";
import { PortableText } from "@portabletext/react";

const BlogSingle = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  console.log("slug is ", slug);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post' && slug.current == '${slug}']{title,body,mainImage{asset -> {url}}}`
      )
      .then((res) => {
        console.log("query results", res);
        setArticle(res[0]);
      });
  }, [slug]);

  if (!article) {
    return <h1>Data is loading</h1>;
  }

  if (article) {
    return (
      <div className="flex flex-col space-y-10 mt-10 container mx-auto">
        <h1 className="text-center text-yellow-500"></h1>
        <div className="max-w-[1000px] mx-auto">
          <img
            src={article.mainImage.asset.url}
            alt=""
            className="w-full rounded-lg object-cover "
          />
        </div>
        <h1 className="text-center text-yellow-500">{article.title}</h1>
        <PortableText value={article.body} />
        <Link
          to={"/blog"}
          className="bg-rose-500 py-2 px-3 w-48 rounded-lg self-end"
        >
          Back To Blog Archive
        </Link>
      </div>
    );
  }
};

export default BlogSingle;
