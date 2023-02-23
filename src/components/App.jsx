// import exampleVideoData.js into app
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

const { useState, useEffect } = React;

var App = () => {

  const [currentVideo, setCurrentVideo] = useState(null);
  const [list, setList] = useState([]);

  const getVideos = (query) => {
    searchYouTube(query, (data) => {
      console.log('data: ', data);
      setList(data);
      setCurrentVideo(data[0]);
    });
  };

  useEffect(() => {
    getVideos('cat videos');
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><Search videos={list} setList={setList}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><VideoPlayer video={currentVideo}/></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><VideoList videos={list} currentVideo={currentVideo} setCurrentVideo={setCurrentVideo}/></h5></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
