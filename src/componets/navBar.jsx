import React, { Component } from 'react';

export default class Navbar extends Component {

    state = {
        links: [
            {title: "home", url: "https://kvtt.ml"},
            {title: "about", url: "https://kvtt.ml"},
            {title: "projects", url: "https://kvtt.ml"},
            {title: "playlists", url: "https://kvtt.ml"}
        ]
    };

    render() { 
        return (
            <div id="navbar" >

                <nav className="flex items-center justify-center">
            
                    <ul className="flex">

                        { this.state.links.map(links => <li className="p-4 font-['ubuntu'] text-lg text-indigo-500 hover:underline hover:text-zinc-800"> <a href={ links.url }>{ links.title }</a> </li>) }
            
                    </ul>
            
                </nav>

            </div>
        );
    }
}
