import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setNewPeople } from "../../features/Crud/action";
import {
  fetchPeople,
  fetchPlanets,
  fetchStarship,
} from "../../features/Existing/action";

function ExistingPage() {
  const dispatch = useDispatch();
  const { isLoading, peoples, starships, planets } = useSelector(
    (state) => state.existing
  );
  const [activeTabs, setActiveTabs] = useState("planets");

  useEffect(() => {
    if (activeTabs === "people") {
      dispatch(fetchPeople());
    } else if (activeTabs === "starships") {
      dispatch(fetchStarship());
    } else {
      dispatch(fetchPlanets());
    }
  }, [dispatch, activeTabs]);

  return (
    <section className="relative bg-gradient-to-b to-slate-200 from-slate-50 h-full">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full">
        <div className="h-full pt-10">
          {/* Tabs */}
          <div className="text-center pb-12 md:pb-16">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-400">
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                  <button
                    onClick={() => setActiveTabs("planets")}
                    className={`inline-block p-4 rounded-t-lg ${
                      activeTabs === "planets"
                        ? "text-gray-600 border-gray-600"
                        : null
                    } border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                  >
                    Planets
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    onClick={() => setActiveTabs("starships")}
                    className={`inline-block p-4 rounded-t-lg ${
                      activeTabs === "starships"
                        ? "text-gray-600 border-gray-600"
                        : null
                    } border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                  >
                    Starships
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    onClick={() => setActiveTabs("people")}
                    className={`inline-block p-4 rounded-t-lg ${
                      activeTabs === "people"
                        ? "text-gray-600 border-gray-600"
                        : null
                    } border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                  >
                    {" "}
                    People
                  </button>
                </li>
                <li className="ml-auto">
                  <a
                    href="/#"
                    className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-500 dark:hover:text-gray-500 text-gray-600"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div role="status">
            <svg
              aria-hidden="true"
              className={`mx-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 ${
                isLoading ? "block" : "hidden"
              }`}
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>

          {/* Content */}
          {activeTabs === "people" ? (
            <div>
              <div className="flex flex-wrap justify-around gap-5">
                {peoples?.map((item) => (
                  <div className="relative flex flex-col p-4 mb-8 shadow-lg hover:shadow-2xl rounded-2xl w-60">
                    <div className="text-2xl pt-4 pb-2 font-semibold  text-orange-600">
                      {item.name}
                    </div>
                    <div className="text-start">
                      <div>Height: {item.height}</div>
                      <div>Weight: {item.mass}</div>
                      <div>Gender: {item.gender}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTabs === "planets" ? (
            <div>
              <div className="flex flex-wrap justify-around gap-5">
                {planets?.map((item) => (
                  <div className="relative flex flex-col p-4 mb-8 shadow-lg hover:shadow-2xl rounded-2xl w-60">
                    <div className="text-2xl pt-4 pb-2 font-semibold  text-orange-600">
                      {item.name}
                    </div>
                    <div className="text-start">
                      <div>Diameter: {item.diameter}</div>
                      <div>Climate: {item.climate}</div>
                      <div>Gravity: {item.gravity}</div>
                      <div>Terrain: {item.terrain}</div>
                      <div>Population: {item.population}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTabs === "starships" ? (
            <div>
              <div className="flex flex-wrap justify-around gap-5">
                {starships?.map((item) => (
                  <div className="relative flex flex-col p-4 mb-8 shadow-lg hover:shadow-2xl rounded-2xl w-60">
                    <div className="text-2xl pt-4 pb-2 font-semibold  text-orange-600">
                      {item.name}
                    </div>
                    <div className="text-start">
                      <div>Model: {item.model}</div>
                      <div>Class: {item.starship_class}</div>
                      <div>Manufacturer: {item.manufacturer}</div>
                      <div>
                        Max Atmosphere Speed: {item.max_atmosphering_speed}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default ExistingPage;
