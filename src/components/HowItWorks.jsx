import React from 'react';
import '../styles/HowItWorks.css';


function HowItWorks() {
  return (
    <section className="fullpage">
    <section className="order-page" >
      <h1>Our Technology + Your Phone = The Perfect Fit</h1>
      <p>
        Our groundbreaking technology will measure you directly from our app to
        guarantee that your clothes are made to your exact measurements. No
        measuring tape needed.
      </p>
      <div className="image-box">
        <img src="/images/techstep.jpg" alt="techstep" />
      </div>
      </section>
      <section>
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-custom-purple">Does it really work?
          </h1>
          <h2 class="sm:text-3xl text-2xl font-small">20% More Accurate Than A Tailor</h2>
          <p class="mb-8 text-2xl leading-relaxed">We brought in 4 professional tailors and 35 people, and we went head to head against them taking body measurements.<br></br> We came out 20% better!

Our unique measurement app takes 60 measurements across your whole body to ensure that every piece of clothing is a perfect fit.</p>
          <div class="flex justify-center">

          </div>
        </div>
        <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
        <video
        width="400"
        autoPlay
        loop
        muted
        controls
      >
        <source src={`${process.env.PUBLIC_URL}/images/sizemeasurement.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
    </section>
      <h1 class="text-6xl text-black-200">Capturing your measurements</h1>
      <p class ="mt-5 sm:text-1xl">
      Our app captures a brief video and turns that into a full set of custom measurements. We’ve created the technology that can take your dimensions with a simple 360 degree turn.
      </p>
    <section>
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 class="sm:text-3xl text-2xl font-small">Record Your Video</h2>
          <p class="mb-8 text-1xl leading-relaxed">Put your phone down, step back 6 feet and turn around once. It takes less than 15 seconds!</p>
          <div class="flex justify-center">

          </div>
        </div>
        <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
        <div className="image-box">
        <img src="/images/bodymeasure2.jpg" alt="techstep" />
      </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 class="sm:text-3xl text-2xl font-small">Capture Your 3D Point Cloud</h2>
          <p class="mb-8 text-1xl leading-relaxed">Our technology captures your 3D Point Cloud to accurately size your clothes.</p>
          <div class="flex justify-center">

          </div>
        </div>
        <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
        <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
        <video
        width="400"
        autoPlay
        loop
        muted
        controls
      >
        <source src={`${process.env.PUBLIC_URL}/images/3dviewpoints.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 class="sm:text-3xl text-2xl font-small">3D Scan Finalized & Measurements Created</h2>
          <p class="mb-8 text-1xl leading-relaxed">Our system can then calculate 60 measurements to ensure your clothes fit you perfectly.</p>
          <div class="flex justify-center">

          </div>
        </div>
        <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
        <div className="image-box">
        <img src="/images/measurementdone.jpg" alt="techstep" />
      </div>
        </div>
      </div>
    </section>
    </section>
  );
}

export default HowItWorks;
