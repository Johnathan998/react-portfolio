import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className='contact-page'>
                            <h1>Contact Me</h1>
                            <hr />
                            <div className='phone'>
                                <i className="fa fa-mobile"></i>
                                <h3>
                                    801.618.9947</h3>
                            </div>

                            <div className='email'>
                                <i className="fas fa-envelope"></i>
                                <h3>
                                    olivas.johnathan@yahoo.com
                                </h3>
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default Contact;