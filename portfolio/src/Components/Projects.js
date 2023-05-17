import React from "react";
let photo = "https://images.unsplash.com/photo-1683201681334-f25eb7658958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"

export default function About({ fixed }) {
    return (
        <div className="bg-gray-100 section" id="projects">
            {/* create cards that show the project and give a discription for them */}
            <div className="container py-20 mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl font-semibold">Projects</h2>
                        <p className="text-lg leading-relaxed m-4 text-gray-600">
                            Here are some of the projects I have worked on.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <img
                                alt="..."
                                src={photo}
                                className="w-full align-middle rounded-t-lg"
                            />
                            <blockquote className="relative p-8 mb-4">
                                <svg
                                    preserveAspectRatio="none"
                                    viewBox="0 0 583 95"
                                    className="absolute left-0 w-full block"
                                    style={{
                                        height: "95px",
                                        top: "-94px"
                                    }}
                                >
                                    <polygon
                                        points="-30,95 583,95 583,65"
                                        className="text-white fill-current"
                                    ></polygon>
                                </svg>
                                <h4 className="text-xl font-bold text-gray-600">
                                    Example
                                </h4>
                                <p className="text-md font-light mt-2 text-gray-600">
                                    This is where the discription of the project will go.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <img
                                alt="..."
                                src={photo}
                                className="w-full align-middle rounded-t-lg"
                            />
                            <blockquote className="relative p-8 mb-4">
                                <svg
                                    preserveAspectRatio="none"
                                    viewBox="0 0 583 95"
                                    className="absolute left-0 w-full block"
                                    style={{
                                        height: "95px",
                                        top: "-94px"
                                    }}
                                >
                                    <polygon
                                        points="-30,95 583,95 583,65"
                                        className="text-white fill-current"
                                    ></polygon>
                                </svg>
                                <h4 className="text-xl font-bold text-gray-600">
                                    Example
                                </h4>
                                <p className="text-md font-light mt-2 text-gray-600">
                                This is where the discription of the project will go.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <img
                                alt="..."
                                src={photo}
                                className="w-full align-middle rounded-t-lg"
                            />
                            <blockquote className="relative p-8 mb-4">
                                <svg
                                    preserveAspectRatio="none"
                                    viewBox="0 0 583 95"
                                    className="absolute left-0 w-full block"
                                    style={{
                                        height: "95px",
                                        top: "-94px"
                                    }}
                                >
                                    <polygon
                                        points="-30,95 583,95 583,65"
                                        className="text-white fill-current"
                                    ></polygon>
                                </svg>
                                <h4 className="text-xl font-bold text-gray-600">
                                    Example
                                </h4>
                                <p className="text-md font-light mt-2 text-gray-600">
                                This is where the discription of the project will go.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <img
                                alt="..."
                                src={photo}
                                className="w-full align-middle rounded-t-lg"
                            />
                            <blockquote className="relative p-8 mb-4">
                                <svg
                                    preserveAspectRatio="none"
                                    viewBox="0 0 583 95"
                                    className="absolute left-0 w-full block"
                                    style={{
                                        height: "95px",
                                        top: "-94px"
                                    }}
                                >
                                    <polygon
                                        points="-30,95 583,95 583,65"
                                        className="text-white fill-current"
                                    ></polygon>
                                </svg>
                                <h4 className="text-xl font-bold text-gray-600">
                                    Example
                                </h4>
                                <p className="text-md font-light mt-2 text-gray-600">
                                This is where the discription of the project will go.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}