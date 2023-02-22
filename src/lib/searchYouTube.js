import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: `https://app-hrsei-api.herokuapp.com/api/recastly/videos/?youtube_api_key=${YOUTUBE_API_KEY}&q=${query}`,
    type: 'GET',
    data: { order: '-createdAt' },
    contentType: 'application/json',
    success: callback,
    error: () => console.error('Recast.ly failed to get results')
  });
};

export default searchYouTube;

// https://www.youtube.com/results?search_query=random+search