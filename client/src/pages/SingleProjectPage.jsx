import React, { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
import client from "../lib/client";

const SingleProjectPage = () => {
  const [project, setProject] = useState([]);
  const { slug } = useParams();
  console.log("slug is :", slug);
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'project' && slug.current == "${slug}"]{title,description, slug{current},website,featuredimage{asset -> {url}}}
        `
      )
      .then((res) => {
        setProject(res[0]);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  if (!project) {
    return <div>Loading</div>;
  }

  if (project && project.featuredimage?.asset) {
    console.log("project is", project);
    return (
      <div className="flex flex-col space-y-10 mt-10 container mx-auto">
        <h1 className="text-center text-yellow-500"></h1>
        <div className="max-w-[1000px] mx-auto">
          <img
            src={project.featuredimage.asset.url}
            alt=""
            className="w-full rounded-lg object-cover "
          />
        </div>
        <h1 className="text-center text-yellow-500">{project.title}</h1>
        <PortableText value={project.description} />
        <Link
          to={"/portfolio"}
          className="bg-rose-500 py-2 px-3 w-48 rounded-lg text-center self-end"
        >
          Back To Portfolio
        </Link>
      </div>
    );
  }
};

export default SingleProjectPage;
