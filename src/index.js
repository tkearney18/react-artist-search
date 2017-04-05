import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

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
       axios.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`)
       .then((result) => {
            const searchedArtist = result.data.artists.items[0]
            this.setState({'searchedArtist': searchedArtist})
       })
       .then((result) => {
            axios.get(`https://api.spotify.com/v1/artists/${ this.state.searchedArtist.id }/related-artists`)
            .then((results) => {
            const relatedArtists = results.data.artists
            this.setState({'relatedArtists': relatedArtists})
        })
        .then(() => {
            this.setState({'ready': true})
        })
       })
    }

    render() {
        return(
            <div className="react-artist-search container">
                <div className="row">
                    <Search onSearchSubmit={ this.handleSearchSubmit.bind(this) }/>
                </div>
                {!this.state.ready ? <div className="row"><span className="col-lg-6 col-lg-push-3">Search for something</span></div> :
                 <div>
                    <div className="row">
                        <div className="col-lg-6 col-lg-push-3">
                            <h3>Searched Artist</h3>
                            <Artist artist={this.state.searchedArtist} />
                        </div>
                    </div>
                    <div className="row">
                        <h4>Related Artist</h4>
                        <RelatedArtists relatedArtists={this.state.relatedArtists} />
                    </div>
                </div>
                }
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));