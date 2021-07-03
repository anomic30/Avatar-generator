import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import Axios from 'axios';

const Home = () => {

    const [url, setUrl] = useState("");
    const [sprite, setSprite] = useState("male");
    const [seed, setSeed] = useState(1111);

    function handleSprite(spritetype) {
        setSprite(spritetype);
    }

    function handleGenerate() {
        let x = Math.floor(Math.random() * 100000);
        setSeed(x);
    }

    return (
        <div className="home">
            <h1>Random Avatar Generator</h1>
            <div className="btns">
                <button onClick={()=>{ handleSprite("avataaars") }}>Human</button>
                <button onClick={()=>{handleSprite("male")}}>Male</button>
                <button onClick={()=>{handleSprite("female")}}>Female</button>
                <button onClick={()=>{handleSprite("identicon")}}>Identicon</button>
                <button onClick={()=>{handleSprite("bottts")}}>Bots</button>
                <button onClick={()=>{handleSprite("jdenticon") }}>Avatars</button>
                <button onClick={()=>{handleSprite("gridy") }}>Avatars</button>
                <button onClick={()=>{handleSprite("micah") }}>Avatars</button>
                <button onClick={()=>{handleSprite("human")}}>Pixel</button>
            </div>
            <div className="avatar">
                <img src={`https://avatars.dicebear.com/api/${sprite}/${seed}.svg`} alt="Sprite"/>
            </div>
            <div className="generate">
                <button onClick={()=>{handleGenerate()}}>Generate</button>
            </div>
        </div>
    )
}

export default Home
