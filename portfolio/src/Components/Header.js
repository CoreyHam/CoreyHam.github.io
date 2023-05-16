import React from "react";
import photo from '../thatsme.png'


export default function Header({ fixed }) {
    return ( 
        <div className="bg-gray-100 section" id="about">

            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded-full p-10" alt="hero" src={photo} />
                </div>
                <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950">I build things for the web.
                    </h1>
                
                    <p className="mb-8 leading-relaxed">Hi there! I'm Corey Hampton. A front-end developer with a passion for coding and creating new things.</p>
                    <div className="flex justify-center">
                        <a

                            href="#contact"
                            className="inline-flex text-white bg-gray-950 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg"
                        >Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-950 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                        >See My Past Work
                        </a>
                    </div>
                    {/* add linkedin and github */}
                    <div className="flex justify-center mt-4">
                        <a
                            href="https://www.linkedin.com/in/corey-hampton-dev/"
                            className="ml-4 inline-flex text-gray-950 border-0 focus:outline-none hover:text-rose-700 rounded text-3xl"
                        > <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/CoreyHam"
                            className="ml-4 inline-flex text-gray-950 border-0 focus:outline-none hover:text-rose-700 rounded text-3xl"
                        > <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}