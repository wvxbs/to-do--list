import React from 'react';
import TaskOverview from './hero/TaskOverview';
import Info from './hero/Info';

const Hero = props => {
    return (
        <div class="hero is-white is-fullheight-with-navbar">
            <div class="hero-body">
                <div className="container">
                    <div class="columns">
                        <div class="column">
                            <div>
                                <p class="title is-bold">
                                    Olá {props.name}!
                                </p>
                            </div>
                            <div>
                                <Info 
                                    tasks={0}
                                />
                            </div>
                        </div>
                        <div className="column">
                            <TaskOverview
                                tasks={0}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero