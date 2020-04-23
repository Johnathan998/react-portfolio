import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className='home-page'>
                            <h1>About Me</h1>
                            <hr />
                            <p>  I’m Johnathan Olivas, Im currently working at Mountain America Credit Union as a lead in loans. Im 21 years
            old
            looking for a different career path and coding was of very high interest. Im currently learning to become a
            full
            stack developer at the University of Utah. Definitely challenging and frustrating at times but definitely Is
            worth seeing the progress from when I didn’t know anything about coding to something. Eventually I would
            love to
            be doing web development as a career. Below you will see some of the projects and assignments I’ve been
            working
            on in my U of U coding class.</p>
                            <div className='social-links'>
                                <a href="https://github.com/johnathan998" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/johnathan-o-535901a8/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Home;