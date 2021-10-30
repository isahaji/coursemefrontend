import React, { useState,useEffect } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player/youtube";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import Rating from "@mui/material/Rating";

const CoursePage = () => {
  let { title, desc, rating, youtube } = useParams();
  const [play, pause] = useState(false);
  const [playBack, setPlayBack] = useState(1);

  useEffect(() => {
    document.title = `${title} - CourseMe`;
  }, [title]);


  return (
    <div className="bg-gray-50 h-full mt-2 ">
      <div className="p-2 text-center">Courses</div>

      <div className="md:flex lg:flex lg:ml-12">
        <div className="">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${youtube}`}
            playing={play}
            playbackRate={playBack}
          />

          <div className="flex m-auto justify-center py-2">
            <ButtonGroup
              size="large"
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button onClick={() => setPlayBack(1)}>
                <FastRewindIcon />
              </Button>
              <Button onClick={() => pause(!play)}>
                {play === true ? <PauseIcon /> : <PlayArrowIcon />}
              </Button>
              <Button onClick={() => setPlayBack(2)}>
                <FastForwardIcon />
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="ml-12 mb-2 w-96 bg-green-100 md:rounded-2xl lg:rounded-2xl">
          <div className="text-center items-center font-bold  text-4xl text-gray-700 h-12 mt-2 ml-12">
            {" "}
            {title}{" "}
          </div>
          <div className="ml-2 p-2">
            <p>Rating</p>
            <Rating name="read-only" value={rating} readOnly />
          </div>
          <div className="ml-2 p-2">{desc}</div>
        </div>
      </div>
    </div>
  );
};



export default CoursePage;
