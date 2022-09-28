import React from "react";
import HeroImage from "../../assets/hero-imagess.jpeg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="relative bg-gradient-to-b to-slate-200 from-slate-50">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-24">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Your Imagination{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-400">
                StarWars World
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Now you can imagine all the things that you want and make it
                happen !
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link to="existing">
                    <span className="py-4 px-10 rounded-full  text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">
                      Take A look To Existing Starwars
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8 shadow-xl rounded-2xl">
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={HeroImage}
                  width="660"
                  alt="Hero"
                />
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  //   setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <Link to="create">
                  <span className="">Create One!</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
