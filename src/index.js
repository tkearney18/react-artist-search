import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import RelatedArtists from './components/RelatedArtists'
import Artist from './components/Artist'

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
            <div className="greeting">
                <Search onSearchSubmit={ this.handleSearchSubmit }/>
                <Artist artist={this.state.searchedArtist} />
                <RelatedArtists relatedArtists={this.state.relatedArtists} />
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));