import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {

    state = {
        links: [
            {title: "home", url: "/"},
            {title: "about", url: "/about"},
            {title: "projects", url: "/projects"}]
    };

    render() { 

        return (
            <div id="navbar" className="bg-zinc-800 sticky top-0">

                <nav className="flex items-center justify-center">
            
                    <ul className="flex">

                        { this.state.links.map(links => <li className="p-5 text-4xl font-['ubuntu'] text-lg text-indigo-500 transition ease-in-out delay-300 hover:scale-125"> <NavLink to={ links.url }>{ links.title }</NavLink> </li>) }
            
                    </ul>
            
                </nav>

            </div>
        );
    }
}
