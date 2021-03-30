import React from 'react';
import { Link } from "react-router-dom";

export default class About extends React.Component {
  render() {
    return (
      <div className="text-center text-xl">
        <img src="./face.jpeg" alt="face" className="rounded-full w-38 h-28 border-red-500 border-4 m-auto mb-4" />
        <div className="mt-4">
          <strong>software engineer</strong> | <strong>game developer</strong> | <strong>3D printing enthusiast</strong>
        </div>
        <div className="mt-4">
          <Link to="/projects" className="text-red-500 hover:text-red-200 font-bold">projects</Link> | <a className="web" href="https://github.com/hfitzwater">github</a>
        </div>
      </div>
    );
  }
}