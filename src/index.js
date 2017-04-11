import _ from 'lodash';
//create an manage our components
import React, { Component } from 'react';
// handling with DOM
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyBknbcqKalfENOTdqpW8OZADPLtcypxdMA";

// Create a Component that produces HTML code

// const => ES6 --> Konstante definieren --> nicht änderbar
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    this.videoSearch("surfboards")
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term}, (videos) => {
      // wenn key und value den selben Namen haben (hier videos)
      // ES6 wird das zu this.setState({videos: videos}); umwandeln => syntactic sugar
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render(){
    // die videoSearch Methode wird nun überschrieben, sodass sie nur alle 300 ms ausgeführt werden kann
    // => debounced Version of videoSearch
    // der Rest wird dennoch beliebig oft gerendert
    // ==> nun können wir eine Eingabe machen und maximal 300ms warten und schon wird es ausgeführt
    const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300);

    // JSX --> looks like HTML --> will be interpreted
    // https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&browsers=&builtIns=false&code=%3Cdiv%3E%3C%2Fdiv%3E
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}



// Take this component´s HTML and put it on the page (in the DOM)
// passes a the class "App" to react --> wrong => Error
//ReactDOM.render(App);
// passes an instance of App
ReactDOM.render(<App />, document.querySelector('.container'));
