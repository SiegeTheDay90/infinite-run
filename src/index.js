import Game from "./classes/Game.js";
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import "./index.scss";

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const game = document.getElementById("game");

    const firebaseConfig = {
        _name: "Interceptor",
        authDomain: "interceptor-69b21.firebaseapp.com",
        projectId: "interceptor-69b21",
        storageBucket: "interceptor-69b21.appspot.com",
        messagingSenderId: "104049209361",
        appId: "1:104049209361:web:595773401aaa7933e3c1b0"
    };
    
    const app = initializeApp(firebaseConfig, "HighScores");
    const db = getFirestore(app);
 
    
    
    const sendScore = async function(name, highscore) {
        
        await addDoc(collection(db, "infinite-scores"),{
            name: name,
            score: highscore
        })
    }
        
    const getScores = async function(){
        let ref = collection(db,"infinite-scores");
        const querySnapshot = await getDocs(ref);
        let arr = [];
        querySnapshot.forEach( (ele) => {
            arr.push(ele.data());
        })
        return arr;
    }

    const buildHighScoreList = async function(type){
        type = type || 'local';
        const highScoresList = document.getElementById('high-scores-list');
        highScoresList.innerHTML = '';
        let highScores;

        if (type === 'local'){
            if(!window.localStorage['infinite-highscores'] || JSON.parse(window.localStorage['infinite-highscores']).length === 0){
                window.localStorage['infinite-highscores'] = JSON.stringify([{name: 'Good', score: 100}, {name: 'Luck!', score: 90}, {name: 'Your', score: 80}, {name: 'Name', score: 70}, {name: 'Here', score: 60}]);
            };
            highScores = JSON.parse(window.localStorage['infinite-highscores']);
        } else {
            highScores = (await getScores())
                .sort((f, s) => s.score - f.score);
        }
        
        highScores.slice(0,5).forEach((ele) => {
            let newLi = document.createElement("li");
            newLi.innerText = `${ele.name}: ${ele.score}`;
            highScoresList.appendChild(newLi);
        });
    }

    buildHighScoreList();

    
    const highScoreSelector = document.getElementById('high-score-selector');

    highScoreSelector.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target.className === 'local'){
            event.target.innerHTML = 'Show Local';
            document.getElementById('high-scores-title').innerHTML = 'Global Leaderboard';
        } else {
            event.target.innerHTML = 'Show Global';
            document.getElementById('high-scores-title').innerHTML = 'Local Leaderboard';
        }
        event.target.classList.toggle('local');
        event.target.classList.toggle('global');
        buildHighScoreList(event.target.className);
    })

    const background = document.getElementById("background");
    const canvasContainer = document.getElementById("canvas-container");
    const contexts = {
        background: background.getContext("2d"),
        game: game.getContext("2d")
    }

    const viewPortWidth = window.innerWidth;    
    game.width = Math.min(viewPortWidth * 0.7, 800);
    game.height = game.width * (8/16);
    background.width = Math.min(viewPortWidth * 0.7, 800);
    background.height = game.width * (8/16);
    canvasContainer.style.width = game.width+2;
    canvasContainer.style.height = game.height+2;
    
    
    const _ = new Game(contexts, [game.width, game.height]);
    _.getScores = getScores;
    _.sendScore = sendScore;
    _.buildHighScoreList = buildHighScoreList;
    _.run();
})

