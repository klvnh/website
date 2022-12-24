import React, { Component } from 'react';

export default class Projectsbody extends Component {

    state = {
        projects: [
            {title: "website", url:"https://github.com/klvnh/website", desription: "Source code of kvtt.ml"},

        ]
    };

    render() { 

        return (
            <div className="flex flex-col items-center h-screen m-20 font-['ubuntu'] text-indigo-500 text-xl">

                { this.state.projects.map(projects =>  
                
                <a href= { projects.url }>

                <div className="flex p-10 m-5 border-2 border-indigo-800 rounded-lg transition ease-in-out delay-150 hover:scale-110">

                    <div>

                        <h1 className="pb-5 text-4xl">{ projects.title }</h1>

                        <div>

                            <p className="pb-2 text-2xl">{ projects.desription }</p>

                        </div>

                    </div>

                </div>
                </a>
                
                )}

            </div>
        );
    }
}
