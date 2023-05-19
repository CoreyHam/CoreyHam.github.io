import React from "react";
let photo = "https://assets-prd.ignimgs.com/2023/03/30/village-1680206281634.jpg"

export default function About({ fixed }) {
    return (
        <div className="bg-gray-100 section" id="contact">
            {/* create cards that show the project and give a discription for them */}
            <div className="container py-20 mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-4/12 px-4">
                        <h2 className="text-4xl font-semibold">Contact Me</h2>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4 ">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:bg-gray-200">
                            <a href="mailto:corey.hampton77@outlook.com">
                                <blockquote className="relative p-8">
                                    <i class="fa-solid fa-envelope text-3xl text-gray-600"></i>
                                    <h4 className="text-xl font-bold text-gray-600">
                                        Email
                                    </h4>
                                </blockquote>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:bg-gray-200">
                            <a href="https://www.linkedin.com/in/corey-hampton-dev/">
                                <blockquote className="relative p-8">
                                    <i class="fa-brands fa-linkedin text-3xl text-gray-600"></i>
                                    <h4 className="text-xl font-bold text-gray-600">
                                        LinkedIn
                                    </h4>
                                </blockquote>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:bg-gray-200">
                            <a href="https://github.com/CoreyHam">
                                <blockquote className="relative p-8">
                                    <i class="fa-brands fa-github text-3xl text-gray-600"></i>
                                    <h4 className="text-xl font-bold text-gray-600">
                                        Github
                                    </h4>
                                </blockquote>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}