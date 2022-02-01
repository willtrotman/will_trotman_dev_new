import classes from "./AudioPlayer.module.scss";
import { AiFillFastForward, AiFillFastBackward } from "react-icons/ai";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { playlist } from "../../Data";

export const AudioPlayer = ({ isPlaying, setIsPlaying }) => {
  // State
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // Refs
  const audioPlayer = useRef(); // audio
  const progressBar = useRef(); // progress bar
  const animationRef = useRef(); // reference the animation

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
    setIsPlaying(!isPlaying);
  };

  const changePlayerCurrentTime = () => {
    if (progressBar.current) {
      progressBar.current.style.setProperty(
        `$seek-before-width`,
        `${(progressBar.current.value / duration) * 100}%`
      );
      setCurrentTime(progressBar.current.value);
    }
  };

  const whilePlaying = () => {
    if (audioPlayer.current) {
      progressBar.current.value = audioPlayer.current.currentTime;
    }
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 30;
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  };

  // Audio src function

  const shufflePlaylist = () => {
    const randomNum = Math.floor(Math.random() * playlist.length);
    console.log({ randomNum });
    const songShuffle = playlist[randomNum].file;
    audioPlayer.current.pause();
    console.log({ audioPlayerCurrent: audioPlayer.current });
    setIsPlaying(false);
    audioPlayer.current.src = songShuffle;
    audioPlayer.current.play();
    setIsPlaying(true);
  };

  // if audio player hasn't loaded it's duration,
  // run loadProgressBarValues again before repainting the DOM.
  // This will loop endlessly untill duration is loaded at which point it goes to the else statement and the code continues
  const loadProgressBarValues = () => {
    if (!audioPlayer.current.duration) {
      window.requestAnimationFrame(loadProgressBarValues);
    } else {
      const seconds = Math.floor(audioPlayer.current.duration);
      if (seconds) {
        setDuration(seconds);
        progressBar.current.max = seconds;
      }
      whilePlaying();
    }
  };

  useEffect(() => {
    loadProgressBarValues();
    console.log({ audioPlayer });
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    shufflePlaylist();
    setIsPlaying(true);
  }, [setIsPlaying, audioPlayer.src]);

  // Return statement

  return (
    <div className={classes.audioPlayer}>
      <h1 className={classes.headingLRetro}>Retro Player</h1>
      <audio ref={audioPlayer} />
      <div className={classes.controls}>
        <button onClick={backThirty} className={classes.forwardBackward}>
          <AiFillFastBackward /> 30
        </button>
        <button className={classes.playPause} onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay className={classes.play} />}
        </button>
        <button onClick={forwardThirty} className={classes.forwardBackward}>
          30 <AiFillFastForward />
        </button>
      </div>
      <button onClick={shufflePlaylist} className={classes.shuffleButton}>
        Shuffle
      </button>

      <div className={classes.progress}>
        {/* Current time */}
        <div className={classes.currentTime}>{calculateTime(currentTime)}</div>

        {/* Progress bar */}
        <div>
          <input
            className={classes.progressBar}
            type="range"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>

        {/* Duration */}
        <div className={classes.duration}>
          {duration && !isNaN(duration) && calculateTime(duration)}
        </div>
      </div>
    </div>
  );
};
