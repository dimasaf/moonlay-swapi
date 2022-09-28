import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewPeople,
  setNewPlanets,
  setNewStarship,
} from "../../features/Crud/action";
import Swal from "sweetalert2";

function CreatePage() {
  const dispatch = useDispatch();
  const { people, planets, starships } = useSelector((state) => state.crud);
  const [activeTabs, setActiveTabs] = useState("planets");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitPeople = (data) => {
    let id = "id" + Math.random().toString(16).slice(2);
    const payload = { ...data, id: id };
    dispatch(setNewPeople([...people, payload]));
    Swal.fire("Success");
  };
  const onSubmitPlanet = (data) => {
    let id = "id" + Math.random().toString(16).slice(2);
    const payload = { ...data, id: id };
    dispatch(setNewPlanets([...planets, payload]));
    Swal.fire("Success");
  };
  const onSubmitStarship = (data) => {
    console.warn(data);
    let id = "id" + Math.random().toString(16).slice(2);
    const payload = { ...data, id: id };
    dispatch(setNewStarship([...starships, payload]));
    Swal.fire("Success");
  };

  const handleDeletePeople = (val) => {
    const newArr = people.filter((item) => item.id !== val.id);
    dispatch(setNewPeople(newArr));
  };
  const handleDeletePlanet = (val) => {
    const newArr = planets.filter((item) => item.id !== val.id);
    dispatch(setNewPlanets(newArr));
  };
  const handleDeleteStarship = (val) => {
    const newArr = starships.filter((item) => item.id !== val.id);
    dispatch(setNewStarship(newArr));
  };

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
        <div className="h-screen pt-10">
          {/* Tabs */}
          <div className="text-center pb-12 md:pb-16">
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-400">
              <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                  <button
                    onClick={() => setActiveTabs("planets")}
                    class={`inline-block p-4 rounded-t-lg ${
                      activeTabs === "planets"
                        ? "text-gray-600 border-gray-600"
                        : null
                    } border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                  >
                    Planets
                  </button>
                </li>

                <li class="mr-2">
                  <button
                    onClick={() => setActiveTabs("people")}
                    class={`inline-block p-4 rounded-t-lg ${
                      activeTabs === "people"
                        ? "text-gray-600 border-gray-600"
                        : null
                    } border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                  >
                    {" "}
                    People
                  </button>
                </li>
                <li class="mr-2">
                  <button
                    onClick={() => setActiveTabs("starship")}
                    class={`inline-block p-4 rounded-t-lg ${
                      activeTabs === "starship"
                        ? "text-gray-600 border-gray-600"
                        : null
                    } border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                  >
                    {" "}
                    Starship
                  </button>
                </li>
                <li class="ml-auto">
                  <a
                    href="/#"
                    class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-500 dark:hover:text-gray-500 text-gray-600"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Content */}
          {activeTabs === "people" ? (
            <div>
              <div className="relative flex justify-center mb-8 shadow-xl rounded-2xl">
                <form onSubmit={handleSubmit(onSubmitPeople)}>
                  <div className="flex flex-col justify-center py-4 pb-14">
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="name"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <p className="text-red-500 font-extralight text-xs">
                          nama wajib diisi
                        </p>
                      )}
                    </div>
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="height"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="height"
                        {...register("height", { required: true })}
                      />
                      {errors.height && (
                        <p className="text-red-500 font-extralight text-xs">
                          tinggi wajib diisi
                        </p>
                      )}
                    </div>
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="weight"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-2"
                        placeholder="weight"
                        {...register("weight", { required: true })}
                      />
                      {errors.weight && (
                        <p className="text-red-500 font-extralight text-xs">
                          berat wajib diisi
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                    onClick={handleSubmit(onSubmitPeople)}
                  >
                    <span className="">Create One!</span>
                  </button>
                </form>
              </div>

              <div className="flex gap-5">
                {people?.map((item) => (
                  <div className="relative flex flex-col p-4 mb-8 shadow-lg hover:shadow-2xl rounded-2xl w-60">
                    <div className="text-2xl pt-4 pb-2 font-semibold">
                      {item.name}
                    </div>
                    <div>Height: {item.height}</div>
                    <div>Weight: {item.weight}</div>
                    <div className="flex justify-around mt-10">
                      <button
                        className="px-4 py-2 bg-red-500 rounded-lg text-white"
                        onClick={(e) => handleDeletePeople(item)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTabs === "planets" ? (
            <div>
              <div className="relative flex justify-center mb-8 shadow-xl rounded-2xl">
                <form onSubmit={handleSubmit(onSubmitPlanet)}>
                  <div className="flex flex-col justify-center py-4 pb-14">
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="planetName"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="planets name"
                        {...register("planetName", { required: true })}
                      />
                      {errors.planetName && (
                        <p className="text-red-500 font-extralight text-xs">
                          planet nama wajib diisi
                        </p>
                      )}
                    </div>
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="diameter"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="diameter"
                        {...register("diameter", { required: true })}
                      />
                      {errors.diameter && (
                        <p className="text-red-500 font-extralight text-xs">
                          diameter wajib diisi
                        </p>
                      )}
                    </div>
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="climate"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="climate"
                        {...register("climate", { required: true })}
                      />
                      {errors.climate && (
                        <p className="text-red-500 font-extralight text-xs">
                          climate wajib diisi
                        </p>
                      )}
                    </div>
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="terrain"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-2"
                        placeholder="terrain"
                        {...register("terrain", { required: true })}
                      />
                      {errors.terrain && (
                        <p className="text-red-500 font-extralight text-xs">
                          terrain wajib diisi
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                    onClick={handleSubmit(onSubmitPlanet)}
                  >
                    <span className="">Create One!</span>
                  </button>
                </form>
              </div>

              <div className="flex gap-5">
                {planets?.map((item) => (
                  <div className="relative flex flex-col p-4 mb-8 shadow-lg hover:shadow-2xl rounded-2xl w-60">
                    <div className="text-2xl pt-4 pb-2 font-semibold">
                      {item.planetName}
                    </div>
                    <div>Diameter: {item.diameter}</div>
                    <div>Climate: {item.climate}</div>
                    <div>Terrain: {item.terrain}</div>

                    <div className="flex justify-around mt-10">
                      <button
                        className="px-4 py-2 bg-red-500 rounded-lg text-white"
                        onClick={(e) => handleDeletePlanet(item)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTabs === "starship" ? (
            <div>
              <div className="relative flex justify-center mb-8 shadow-xl rounded-2xl">
                <form onSubmit={handleSubmit(onSubmitStarship)}>
                  <div className="flex flex-col justify-center py-4 pb-14">
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="shipName"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="shipName"
                        {...register("shipName", { required: true })}
                      />
                      {errors.shipName && (
                        <p className="text-red-500 font-extralight text-xs">
                          nama wajib diisi
                        </p>
                      )}
                    </div>
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="manufacture"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="manufacture"
                        {...register("manufacture", { required: true })}
                      />
                      {errors.manufacture && (
                        <p className="text-red-500 font-extralight text-xs">
                          manufacture wajib diisi
                        </p>
                      )}
                    </div>
                    <div className="mb-2 text-start ">
                      <input
                        type="text"
                        name="class"
                        className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-2"
                        placeholder="class"
                        {...register("class", { required: true })}
                      />
                      {errors.class && (
                        <p className="text-red-500 font-extralight text-xs">
                          class wajib diisi
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                    onClick={handleSubmit(onSubmitStarship)}
                  >
                    <span className="">Create One!</span>
                  </button>
                </form>
              </div>

              <div className="flex gap-5">
                {starships?.map((item) => (
                  <div className="relative flex flex-col p-4 mb-8 shadow-lg hover:shadow-2xl rounded-2xl w-60">
                    <div className="text-2xl pt-4 pb-2 font-semibold">
                      {item.shipName}
                    </div>
                    <div>manufacture: {item.manufacture}</div>
                    <div>class: {item.class}</div>
                    <div className="flex justify-around mt-10">
                      <button
                        className="px-4 py-2 bg-red-500 rounded-lg text-white"
                        onClick={(e) => handleDeleteStarship(item)}
                      >
                        Delete
                      </button>
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

export default CreatePage;
