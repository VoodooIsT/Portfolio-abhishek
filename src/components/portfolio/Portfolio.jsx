import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "StudyNotion",
    img: "https://private-user-images.githubusercontent.com/123153724/262269029-2cc5373d-9c24-4823-85ed-3e9e23e4b244.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzOTkwMzYsIm5iZiI6MTcwMjM5ODczNiwicGF0aCI6Ii8xMjMxNTM3MjQvMjYyMjY5MDI5LTJjYzUzNzNkLTljMjQtNDgyMy04NWVkLTNlOWUyM2U0YjI0NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIxMlQxNjMyMTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YWEyYWFkMGRlOWI5MDQ3YzAzZDRiZDIxZGQzZDczZTJjMjI1NzcwYTNhODAzOTE4ZDUwYjE4ZDI3OTU5MmY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.lPhjL9-ylAHlWKBu1XGGWEplQlLdVKShVi84LoNkYlU",
    desc: "StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and Express.JS. Frameworks, Libraries, and Tools used: Node.js, express.js, MongoDB, JWT, Bcryptjs, Tailwind CSS and mongoose. A user can signup in 2 ways as an Instructor and as a Student an student can buy course and keep track of his/her progress and instructor can track of which course is trending along with available orders and graph for revenue.",
  },
  {
    id: 2,
    title: "NetflixGPT",
    img: "https://private-user-images.githubusercontent.com/123153724/289935792-ac377a1c-dfd4-44ad-a728-a328e5abc6c5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzOTkyMjYsIm5iZiI6MTcwMjM5ODkyNiwicGF0aCI6Ii8xMjMxNTM3MjQvMjg5OTM1NzkyLWFjMzc3YTFjLWRmZDQtNDRhZC1hNzI4LWEzMjhlNWFiYzZjNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIxMlQxNjM1MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNjU3M2UyY2Q4NGYwYTgxNGNlYTQ2NDgyZjQ2MTkwZmY1YWRiMjcyYjE2ZmI1NjI3NWNiYjg5OTg5NjRkNjRjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.0ngDD1XVQXsH8DM61HA6KY5qs8SKLsZMqenod1fWB-I",
    desc: "NetflixGPT is a Netflix clone with some super powers of GPT Search functionality where you can get movies suggestion acc to some prompt, In this i've added an login and signup functionality using Firebase. The website is an frontend part in which movies is get from TMDB API and framework i've used in React and Tailwind CSS.",
  },
  {
    id: 3,
    title: "SmartEstate",
    img: "https://private-user-images.githubusercontent.com/123153724/289936497-3622c5e4-06c3-45eb-a5b5-5a7d2826314f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI1NjU5NTAsIm5iZiI6MTcwMjU2NTY1MCwicGF0aCI6Ii8xMjMxNTM3MjQvMjg5OTM2NDk3LTM2MjJjNWU0LTA2YzMtNDVlYi1hNWI1LTVhN2QyODI2MzE0Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIxNFQxNDU0MTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNzFmYTVmYWQ5NThhN2M2NTEyYTA5OTI4ZTJiNjQ1MDE2MGI3ZDExMmVjY2JhNGVhMzk4YzFkMGUyNmY3NGIwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.KHyJM0ihlNc81-8HlznH8A8frF5mw2T3y66IxrsYqG8",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Blitz Media",
    img: "https://user-images.githubusercontent.com/123153724/224045017-82496485-2675-40fa-be35-dcb98a8858d8.png",
    desc: "Video Streaming Platform where you can search, categorize videos. Framework used: React.js.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              onClick={() =>
                window.open("https://github.com/VoodooIsT/Portfolio", "_blank")
              }
            >
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
