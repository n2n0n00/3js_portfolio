/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="neo-brutalism-blue mx-5 px-8 py-4 text-center text-white sm:text-xl sm:leading-snug">
        Hi, I&apos;m
        <span className="mx-2 font-semibold text-white">the Developer</span>
        👋
        <br />A Software Engineer from UK
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="text-center font-medium sm:text-xl">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="text-center font-medium sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="text-center font-medium sm:text-xl">
          Need a project done or looking for a dev? <br /> I&apos;m just a few
          keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let&apos;s talk
          <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
