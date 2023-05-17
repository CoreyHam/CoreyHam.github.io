import React from "react";
let photo = "https://assets-prd.ignimgs.com/2023/03/30/village-1680206281634.jpg"

export default function About({ fixed }) {
    return (
        <div className="bg-gray-100 section" id="projects">
            {/* create cards that show the project and give a discription for them */}
            <div className="container py-20 mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-4/12 px-4">
                        <h2 className="text-4xl font-semibold">Contact Me</h2>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4 ">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <blockquote className="relative p-8 mb-4">
                                <h4 className="text-xl font-bold text-gray-600">
                                    Email
                                </h4>
                            </blockquote>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <blockquote className="relative p-8 mb-4">
                                <h4 className="text-xl font-bold text-gray-600">
                                    Github
                                </h4>
                            </blockquote>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <blockquote className="relative p-8 mb-4">
                                <h4 className="text-xl font-bold text-gray-600">
                                    LinkedIn
                                </h4>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}