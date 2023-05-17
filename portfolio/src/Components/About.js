import React from "react";

export default function About({ fixed }) {
    return (
        <div className="bg-gray-200 section" id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950">About Me
                    </h1>
                    <p className="mb-8 leading-relaxed">I grew up in Lexington, Kentucky, where I developed a love for exploring and understanding how things work, especially when it came to video games. As a child, I was always curious about how the games I played were made, and I spent countless hours tinkering with code and experimenting with game design.</p>
                    <p className="mb-8 leading-relaxed">As I got older, my passion for technology grew stronger, and I realized that I could channel that passion into a career in development. Over the years, I've developed important skills such as problem-solving and collaborating with others, both of which are essential in the world of development.</p>
                    <p className="leading-relaxed">Currently, I'm pursuing a career in web development while attending college to obtain a degree in computer science. My goal is to work for a company that values creativity and innovation, where I can continue to learn and grow as a developer. I believe that technology has the power to change the world, and I'm excited to be a part of that change.</p>
                </div>
            </div>
        </div>
    );
}