import React, { useState, useEffect } from "react";
import client from "../lib/client";
import BlogArchiveCard from "../components/Blog-archive-card/BlogArchiveCard";

const BlogArchivePage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post']{title,slug,body, author -> {bio,image{asset -> {url}},name},mainImage{asset -> {url,_id}}}`
      )
      .then((res) => {
        console.log(res);
        setArticles(res);
      })
      .catch((err) => console.log(err));
  }, []);

  if (articles) {
    return (
      <div className="flex flex-col w-full max-h-full">
        <div className="w-full  p-4 grid md:grid-cols-2 xl:grid-cols-3 gap-10 ">
          {/*start of blog card*/}
          {articles.map((article) => (
            <>
              <BlogArchiveCard
                title={article.title}
                description={article.body}
                featuredImage={article.mainImage.asset.url}
                slug={article.slug.current}
              />
            </>
          ))}
        </div>
      </div>
    );
  }
};

export default BlogArchivePage;
