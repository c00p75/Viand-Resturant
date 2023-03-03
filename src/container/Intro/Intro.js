import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) { vidRef.current.pause(); } else { vidRef.current.play(); }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <button type="button" className="app__video-overlay_circle" onClick={handleVideo} onKeyDown={(e) => { if (e.key === 'space') { handleVideo(); } }}>
          {playVideo ? <BsPauseFill color="white" fontSize="2em" /> : <BsFillPlayFill color="white" fontSize="2em" />}
        </button>
      </div>
    </div>
  );
};

export default Intro;
