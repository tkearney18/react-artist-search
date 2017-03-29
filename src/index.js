import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import RelatedArtists from './components/RelatedArtists'
import Artist from './components/Artist'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchedArtist: {
                    name: 'My Band 1',
                    genres: ['genre 1','genre 2','genre 3'],
                    image: 'http://fakeimg.pl/250x100/',
                    link: '#'
            },
            relatedArtists: [
                {
                    name: 'Fake Band 1',
                    genres: ['genre 1','genre 2','genre 3'],
                    image: 'http://fakeimg.pl/250x100/',
                    link: '#'
                },
                {
                    name: 'Fake Band 2',
                    genres: ['genre 1','genre 2','genre 3'],
                    image: 'http://fakeimg.pl/250x100/',
                    link: '#'
                },
                {
                    name: 'Fake Band 3',
                    genres: ['genre 1','genre 2','genre 3'],
                    image: 'http://fakeimg.pl/250x100/',
                    link: '#'
                }
            ]
        }
    }

    handleSearchSubmit(term){
        //this.setState({searchedArtist: term})
        console.log(term)
    }

    render() {
        return(
            <div className="react-artist-search container">
                <div className="row">
                    <Search onSearchSubmit={ this.handleSearchSubmit }/>
                </div>
                <div className="row">
                    <Artist artist={this.state.searchedArtist} classes="col-lg-4 col-lg-push-4" />
                </div>
                <div className="row">
                    <div className="col-lg-12 ">
                        <RelatedArtists relatedArtists={this.state.relatedArtists} classes="col-lg-3" />
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));