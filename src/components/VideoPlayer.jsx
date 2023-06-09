var VideoPlayer = (props) => {
  // video !== undefined ? divs : hold on man
  return !props.video ? (
    <div className="video-player">hold on man</div>
  ) : (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
        <h4>{props.video.snippet.publishTime}</h4>
        <h4>{props.video.snippet.channelTitle}</h4>
      </div>
    </div>
  );
};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
