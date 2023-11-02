import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/action";
import { useEffect, useState } from "react";
import LogoShimmer from "./Shimmer_Effect/shimmer2";
import Tut_vedio from "./images/vedio.mp4";

const App = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);
  const [data, setData] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
    setTimeout(() => {
      setData(1);
    }, 1000);
    setTimeout(() => {
      setDataLoaded(true);
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    const watchedVideo = localStorage.getItem("watchedVideo");
    if (watchedVideo === "true") {
      setShowVideo(false);
    }
    // localStorage.clear();
  }, []);

  const handleSkipVideo = () => {
    setShowVideo(false);
    localStorage.setItem("watchedVideo", "true");
  };

  return (
    <>
      {tickets ? (
        data === 0 ? (
          <LogoShimmer />
        ) : (
          <div>
            <Navbar />
            <Dashboard />
          </div>
        )
      ) : (
        console.error("Something went wrong")
      )}

      {dataLoaded && showVideo && data === 1 && (
        <div className="video-popup">
          <video
            src={Tut_vedio}
            controls
            autoPlay
            muted
            onEnded={handleSkipVideo}
          />
          <button onClick={handleSkipVideo}>Skip Video</button>
        </div>
      )}
    </>
  );
};

export default App;
