import React from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
import './App.css';
import Summarizer from "../components/Summrizer";

const App = () => {

    return (
        <div>
            <Header/>
            <Summarizer className={"body-wrapper"}/>
            <Footer/>
        </div>
    )
}

export default App;
