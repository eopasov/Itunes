import {videoplayerInit} from './videoplayer.js';
import {radioplayerInit} from './radioplayer.js';
import {musicplayerInit} from './musicplayer.js';


const playerBtn= document.querySelectorAll('.player-btn'); 
const playerBlock = document.querySelectorAll('.player-block');
const temp=document.querySelector('.temp');

const deactivationPlayer= ()=>{
    temp.style.display='none';
    playerBtn.forEach((item)=>{item.classList.remove('active')});
    playerBlock.forEach((item)=>{item.classList.remove('active')});
};

playerBtn.forEach((btn,i)=>{
    console.log(btn);
    console.log(playerBlock[i]);
    btn.addEventListener('click',()=>{
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    })
})

videoplayerInit();
radioplayerInit();
musicplayerInit();

