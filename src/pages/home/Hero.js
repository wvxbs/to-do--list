import React, {useState} from 'react';
import TaskOverview from './hero/TaskOverview';
import Info from './hero/Info';

const Hero = props => {

    const [Tasks, setTasks] = useState(2)

    return (
        <div className="hero is-white is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div>
                                <p className="title has-text-weight-bold is-1">
                                    Olá {props.name}!
                                </p>
                            </div>
                            <div>
                                <Info 
                                    Tasks={Tasks}
                                />
                            </div>
                        </div>
                        <div className="column">
                            <TaskOverview
                                Tasks={Tasks}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero