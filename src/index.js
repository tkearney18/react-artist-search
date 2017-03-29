import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'

class App extends React.Component {

    handleSearchSubmit(term){
        console.log(term)
    }

    render() {
        return(
            <div className="greeting">
                <Search onSearchSubmit={ this.handleSearchSubmit }/>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));