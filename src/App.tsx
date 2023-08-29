import React, { useEffect } from 'react';
import './assets/styles/app.css';
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // иконки для воспроизведения и паузы
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // иконки для следующего и предыдущего трека
import { IconContext } from "react-icons"; // для кастомизации иконок
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { PlayerSlice } from './store/reducers/PlayerSlice';
import unravel from './assets/music/unravel.mp3'
import { useMusic } from './hooks/useMusic';

function App() {
  const { isPlaying } = useAppSelector(state => state.PlayerSlice)
  const { setPause, setResume } = PlayerSlice.actions
  const dispatch = useAppDispatch()

  const { duration, pause, play, sound } = useMusic(unravel)


  return (
    <div className="App">
      <div className="component">
        <h2>Playing Now</h2>
        <img className="musicCover" src="https://picsum.photos/200/200" />
        <div>
          <h3 className="title">Rubaiyyan</h3>
          <p className="subTitle">Qala</p>
        </div>
        <div>
          <button className="playButton">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className="playButton" onClick={() => {
              play()
              dispatch(setResume())
            }
            }>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={() => {
              pause()
              dispatch(setPause())
            }
            }>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className="playButton">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
