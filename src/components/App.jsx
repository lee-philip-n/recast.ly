class App extends React.Component {
  constructor(props) {
    super(props);

    // in react and a stateful function, it is asynchronous so it does have access to props right away
    // set state so class prioritize and gives it access right away
    this.state = {
      videos: this.props.videos,
      video: this.props.videos[0]


    };  
    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);

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
            <Search />
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
