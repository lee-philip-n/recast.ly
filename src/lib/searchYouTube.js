var searchYouTube = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/search';

  $.ajax({
    url: url,
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true,
      key: options.key
    }, 
    success: function(data) {
      console.log('data retrieved');  
      callback(data.items);
    },    
    error: function(data) {
      console.log('retrieval failed');
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;

