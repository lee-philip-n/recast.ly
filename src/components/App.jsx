class App extends React.Component {
  constructor(props) {
    super(props);

    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      videos: [],
      video: {
        id: {videoId: 'videoId'},
        snippet: {
          title: 'title', 
          description: 'description'
        }        
      }
    };  
  }
    
  componentDidMount() {
    this.props.searchYouTube({
      query: 'pikachu',
      max: 5,
      key: window.YOUTUBE_API_KEY
    }, (data) => (this.setState({ 
      videos: data,
      video: data[0]
    }))
    );
  }

  handleInput(e) {
    this.props.searchYouTube({
      query: e.target.value,
      max: 5,
      key: window.YOUTUBE_API_KEY
    }, (data) => (this.setState({ 
      videos: data,
      video: data[0]
   
    }))
    );
  }

  onVideoListEntryClick(video) {
    this.setState(
      {
        video: video
      }
    );
  }
      
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleInput={this.handleInput} />
          </div>
        </nav> 
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video= {this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos= {this.state.videos} handleClick={this.onVideoListEntryClick}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
