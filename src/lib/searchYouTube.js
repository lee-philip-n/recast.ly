var searchYouTube = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3';

  $('btn hidden-sm-down').on('click', function() {
    callback;
  });
    
  // search: function() {
  //   var query = $('.form-control').val();
  //   this.collection.search(query);
  // },


  $.ajax({
    url: url,
    type: 'GET',
    data: {
      part: 'snippet',
      query: query,
      max: 5,
      type: 'video',
      videoEmbeddable: true,
      key: window.YOUTUBE_API_KEY
    }, 
    success: function(data) {
      console.log('data retrieved');
    },    
    error: function(data) {
      console.log('retrieval failed');
    }


  });

};

window.searchYouTube = searchYouTube;
