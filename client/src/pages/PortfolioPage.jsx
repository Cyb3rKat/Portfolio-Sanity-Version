import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import ProjectSlide from "../components/ProjectSlide/ProjectSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/bundle";
import client from "../lib/client";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'project']{title,description, slug{current},website,featuredimage{asset -> {url}}}
    `
      )
      .then((res) => {
        setProjects(res);
      });
  }, []);

  const arr = [1, 2, 3, 4];

  return (
    <div className="w-full flex flex-col  px-10 overflow-x-hidden">
      <div className="flex-grow  flex flex-col items-center justify-center">
        <h1 className="text-center mb-10">
          Some of the <span className="text-rose-500">Projects</span> i enjoyed
          most
        </h1>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper  max-w-sm w-full"
        >
          {projects.map((project, i) => {
            return (
              <SwiperSlide
                className=" bg-slate-600 rounded-xl space-y-5 pt-5 md:min-w-[500px] w-full"
                key={i}
              >
                {
                  <ProjectSlide
                    featuredImage={project.featuredimage.asset.url}
                    title={project.title}
                    description={project.description}
                    slug={project.slug.current}
                  />
                }
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioPage;
