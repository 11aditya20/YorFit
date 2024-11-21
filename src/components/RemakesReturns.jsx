import React from 'react';
import '../styles/RemakesReturns.css'

function RemakesReturns() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-custom-purple">We Believe In Custom Clothes
          </h1>
          <p class="mb-8 text-2xl leading-relaxed">Everyone is different. Tall, short, big and small. That's why we think your clothes should be made just for you. MTailor creates custom clothes measured right on your phone in just 15 seconds. Your perfect fit is just a few clicks away.</p>
          <div class="flex justify-center">

          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src="/images/customfit.png" />
        </div>
      </div>
    </section>
  );
}

export default RemakesReturns;