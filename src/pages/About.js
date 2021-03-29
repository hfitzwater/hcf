import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="text-left">
        <div className="font-bold text-red-500">
          Hello.
        </div>
        <div>
          I'm Hunter. I am a <strong>software engineer</strong> by trade. I also dabble in <strong>game development</strong> and <strong>3D printing</strong>.
        </div>
      </div>
    );
  }
}