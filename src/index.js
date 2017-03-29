import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'

class App extends React.Component {

    handleSearchChange(term) {
        console.log(term)
    }

    render() {
        return(
            <div className="greeting">
                <Search onSearchChange={ this.handleSearchChange } />
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));