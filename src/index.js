import React from 'react'
import ReactDOM from 'react-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

import Search from './components/Search'
import RelatedArtists from './components/RelatedArtists'
import Artist from './components/Artist'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ready: false,
            searchedArtist: '',
            relatedArtists: []
        }
    }

    handleSearchSubmit(term){
    //    let results = axios.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`)
    //    .then((result) => {
    //        return result.data.artists.items[0]
    //    })
        console.log(term)
        // .then((result) => {
        //     const searchedArtist = result.data.artists.items[0]
        //     this.setState({searchedArtist: searchedArtist})
        //     console.log(this)
        // })
        //this.setState({searchedArtist: searchedArtist})
        //console.log(searchedArtist)
        //_this.setState({ ready: true })
    }

    render() {
        return(
            <div className="react-artist-search container">
                <div className="row">
                    <Search onSearchSubmit={ this.handleSearchSubmit.bind(this) }/>
                </div>
                {!this.state.ready ? <p>Search for something</p> :
                 <div>
                    <div className="row">
                        <Artist artist={this.state.searchedArtist} classes="col-lg-4 col-lg-push-4" />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 ">
                            <RelatedArtists relatedArtists={this.state.relatedArtists} classes="col-lg-3" />
                        </div>
                    </div>
                </div>
                }
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));