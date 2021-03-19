import React from 'react';
import welcomImage from '../../assets/home/desktop/image-welcome.jpg';
import '../../styles/Welcome.css';

const Welcome = () => {
  return (
    <div className="Welcome">
      <h1>Welcome</h1>
      <div className="d-flex">
        <div className="Welcome-content align-self-end ml-auto">
          <h3 className="mb-3">Welcome to Arch Studio</h3>
          <p className="lead  mb-0">
            <p className="mt-4 pb-3">
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p className="mt-4 pb-3">
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p className="mt-4">
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </p>
        </div>
        <div class="welcome-img ml-auto">
          <img src={welcomImage} alt="welcome-image" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
