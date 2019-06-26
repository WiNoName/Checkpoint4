import React from 'react';
import './App.css';
import './style.css';
import Photo from './Components/Photo.js';
import Title from './Components/Title.js';
import Wrapper from './Components/Wrapper.js';

function App() {
 return(
        <Wrapper>
            <Photo src = "/profilePhoto.jpg"/>
            <Title style = {{color: 'red'}}>Abderrahman Braham</Title>
            <Title small>Student</Title>
        </Wrapper>
 )
}

export default App;
