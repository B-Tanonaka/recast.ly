import searchYouTube from '../lib/searchYouTube.js';
const { useState } = React;

var Search = (props) => {
  const [searchText, setSearchText] = useState('');
  var limiter = false;
  setInterval(() => { limiter = !limiter; }, 500);
  var typingSearch = (event) => {
    if (limiter) {
      return;
    } else {
      handleSubmit(event);
    }
  };
  var handleSubmit = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
    var data = searchYouTube(searchText, (data) => { props.setList(data); });
  };

  return (
    <div className="search-bar form-inline" >
      <input className="form-control" type="text" value={searchText} onChange={(event) => handleSubmit(event)}/>
      <button className="btn hidden-sm-down" onClick={(event) => handleSubmit(event)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
