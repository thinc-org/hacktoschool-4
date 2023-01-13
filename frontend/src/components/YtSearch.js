import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VidDetail';
const API_KEY = 'AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA';

//for exmaple

class YtSearch extends Component {
    constructor(props) {

        super(props);


        console.log("ssss");
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('react js');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); //Same as this.setState({ videos : videos })
        });
    }

    render() {
        const videoSearch = _.debounce(term => {
            this.videoSearch(term);
        }, 300);

        return (
            <div>
                <h5>Youtube Search:</h5><SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
export default YtSearch;


// ReactDOM.render(<App />, document.querySelector('.container'));
