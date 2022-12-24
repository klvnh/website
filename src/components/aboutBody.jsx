import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Aboutbody extends Component {

    state = {};

    render() { 

        return (

            <div className="flex justify-start p-12 flex-col h-screen text-indigo-500 font-['ubuntu']">

                <div className="flex flex-col">

                    <div>

                        <h className="text-6xl">
                            Intro,
                        </h>

                        <p className="m-8 pb-14 text-2xl">
                            - Hi, my name is kvtt and im in my 3rd year of highschool. I program in Python, HTML & CSS. I am currently learning React.JS and Tailwind CSS
                        </p>

                    </div>

                    <div>

                        <h className="text-6xl">
                            Hobbies,
                        </h>

                        <p className="m-8 pb-14 text-2xl">
                            <li>Programming</li>
                            <li>Reading manwha/manhua</li>
                            <li>Playing games</li>
                        </p>

                    </div>

                    <div>

                        <h className="text-6xl">
                            Socials,
                        </h>

                        <p className="m-8 text-2xl">
                            <li className="underline"><NavLink to="https://www.instagram.com/klvn.huang/">Instagram</NavLink></li>
                            <li className="underline"><NavLink to="https://open.spotify.com/user/pusffa9nmcnv6qy7lywq2vifa?si=8a464b8f91ba4c27">Spotify</NavLink></li>
                            <li className="underline"><NavLink to="https://github.com/klvnh">Github</NavLink></li>
                        </p>

                    </div>

                </div>

            </div>


        );
    }
}
