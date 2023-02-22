import searchYouTube from '../lib/searchYouTube.js';

const { useState } = React;
const { useEffect } = React;

var Search = (props) => {
  const [searchText, setSearchText] = useState('');
  var handleSubmit = (event) => {
    event.preventDefault();
    var data = searchYouTube(searchText, (data) => { props.setList(data); });
    //setSearchText(event.target.value);
    //console.log(searchText);

    console.log('You have typed!');
  };

  //searchYouTube('cat videos', (data) => { console.log(data); });

  return (
    <div className="search-bar form-inline" >
      <input className="form-control" type="text" onInput={(event) => { setSearchText(event.target.value); console.log(searchText); }}/>
      <button className="btn hidden-sm-down" onClick={(event) => handleSubmit(event)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
