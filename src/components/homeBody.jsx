import React, { Component } from 'react';

export default class Homebody extends Component {

    state = {
        pfp: "https://cdn.discordapp.com/attachments/1009901888726110360/1054128055519559790/My_project_1.png"
    };

    render() { 

        return (
            <div className="flex items-center justify-center h-screen overflow-y-auto font-['ubuntu'] text-indigo-500 text-xl">

                <div>

                    <img className="rounded-full" src={ this.state.pfp } alt="pfp" />
                    
                    <p className="flex justify-center mt-10 text-4xl ">
                        Hello, im kvtt!
                    </p>

                </div>

            </div>
        );
    }
}
