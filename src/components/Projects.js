import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import BookFinder from '../assets/bookfinder.png'
import Weather from '../assets/weather.png';
import DadApp from '../assets/dadapp.png';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ height: '250px', background: `url(${Weather}` }}></CardTitle>
                        <CardText style={{ color: 'black' }}>
                            <h6>Weather App</h6>
                            Weather app allows you to search any city and see the current weather plus a 5 day forecast
                    </CardText>
                        <CardActions border>
                            <Button raised ripple href="https://github.com/Johnathan998/weather" target="_blank" rel="noopener noreferrer">GitHub</Button>
                            <Button raised ripple href="https://johnathan998.github.io/weather/" target="_blank" rel="noopener noreferrer">Demo</Button>
                        </CardActions>
                    </Card >
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ height: '250px', background: `url(${BookFinder}` }}></CardTitle>
                        <CardText style={{ color: 'black' }}>
                            <h6>Book Finder</h6>
                            Book Finder uses an API to find best selling books by title, author or ISBN.
                </CardText>
                        <CardActions border>
                            <Button raised ripple href="https://github.com/oakleeohmie/book-search" target="_blank" rel="noopener noreferrer">GitHub</Button>
                            <Button raised ripple href="https://oakleeohmie.github.io/book-search/" target="_blank" rel="noopener noreferrer">Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ height: '250px', background: `url(${DadApp}` }}></CardTitle>
                        <CardText style={{ color: 'black' }}>
                            <h6>Dad App</h6>
                            Dad app is a community app where you can find all the best dad jokes
                    </CardText>
                        <CardActions border>
                            <Button raised ripplehref="https://github.com/Ruffmantom/Dad-app" target="_blank" rel="noopener noreferrer">GitHub</Button>
                            <Button raised ripple href="https://limitless-retreat-33624.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</Button>
                        </CardActions>
                    </Card >
                </div>
            )
        }
    };
    render() {
        return (
            <div className="category-tabs">
                <h1>My Projects</h1>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{ color: 'white' }}>JavaScript</Tab>
                    <Tab style={{ color: 'white' }}>SQL</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
};

export default Projects;