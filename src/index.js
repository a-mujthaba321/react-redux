import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'


const YOUTUBE_KEY = 'AIzaSyCXhMsWNEYzzWlWtlK2nqGWN7eGncsGPyg';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null 
    };

    this.searchForVideos("dil diyan gallan");



  }

  searchForVideos(term) {

    YTSearch({
      key: YOUTUBE_KEY,
      term: term
    }, (videos) => {

      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });

  }


  render() {
    return (
        <div>
          <SearchBar onSearchTermChange={term => this.searchForVideos(term)}/>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      )
  }

}

ReactDOM.render(<App/>, document.querySelector('.container'));
