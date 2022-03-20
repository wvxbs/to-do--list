import React from 'react';
import TaskOverview from './hero/TaskOverview';
import Info from './hero/Info';

const Hero = props => {
    return (
        <div className="hero is-white is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div>
                                <p className="title is-bold">
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