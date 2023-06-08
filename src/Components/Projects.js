import React from "react";
import saturnUniversity from './Images/saturn-university-site.png'
import tictactoe from './Images/tic-tac-toe.png'

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
                                src={saturnUniversity}
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
                                    Saturn University
                                </h4>
                                <p className="text-md font-light mt-2 text-gray-600">
                                    The Saturn University website features a user-friendly design that captures the essence of a fictional academic institution nestled among Saturn's rings.
                                </p>
                            </blockquote>
                            <div className="flex justify-evenly py-2 text-lg font-bold" >
                                <a className="p-4 hover:text-red-700" href="/">Live Demo</a>
                                <a className="p-4 hover:text-red-700" href="https://github.com/CoreyHam/university">GitHub <i class="fa-brands fa-github" ></i> </a>

                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <img
                                alt="..."
                                src={tictactoe}
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
                                    Tic Tac Toe
                                </h4>
                                <p className="text-md font-light mt-2 text-gray-600">
                                    The tic-tac-toe project was a coding challenge where I had to figure out how to code the game tic-tac-toe using only html css and js in a week.
                                </p>
                            </blockquote>
                            <div className="flex justify-evenly py-2 text-lg font-bold" >
                                <a className="p-4 hover:text-red-700" href="https://coreyham.github.io/tictactoe/">Live Demo</a>
                                <a className="p-4 hover:text-red-700" href="https://github.com/CoreyHam/tictactoe">GitHub <i class="fa-brands fa-github" ></i> </a>

                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <img
                                alt="..."
                                src={saturnUniversity}
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
                                src={saturnUniversity}
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
                                src={saturnUniversity}
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
                    </div> */}
                </div>
            </div>
        </div>
    );
}