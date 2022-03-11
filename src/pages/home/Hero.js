import React from 'react';
import Info from './hero/Info';

const Hero = props => {
    return (
        <div class="hero is-white is-fullheight">
            <div class="hero-body">
                <div class="columns">
                    <div class="column">
                        <div>
                            <p class="title">
                                Olá {props.name}
                            </p>
                        </div>
                        <div>
                            <Info 
                                tasks={7}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero