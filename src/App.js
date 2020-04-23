import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="demo-big-content">
        <Layout>
          <Header style={{ backgroundColor: '#0000' }} title="Johnathan Olivas" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer style={{ backgroundColor: 'rgb(55, 62, 77)', color: 'white' }} title="Johnathan Olivas">
            <Navigation>
              <Link to="/" style={{ color: 'white' }}>Home</Link>
              <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
              <Link to="/projects" style={{ color: 'white' }}>Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            < Main />
          </Content>
        </Layout>
      </div>
    </div >
  );
}

export default App;
