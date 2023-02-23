import searchYouTube from '../lib/searchYouTube.js';
const { useState, useEffect } = React;

var Search = (props) => {
  let timeout = null;

  var handleSubmit = (event) => {
    event.preventDefault();
    let query = event.target.value;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (data) => { props.setList(data); });
    }, 500);
  };

  return (
    <div className="search-bar form-inline" >
      <input className="form-control" type="text" onChange={(event) => handleSubmit(event)}/>
      <button className="btn hidden-sm-down" onClick={(event) => handleSubmit(event)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
