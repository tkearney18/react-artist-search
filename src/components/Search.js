import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }
    onTermChange(term) {
        this.setState({term})
        this.props.onSearchChange(term)
    }
    render() {
        return(
            <div className="search">
                <form>
                    <span>Search: </span>
                    <input onChange={event => this.onTermChange(event.target.value)} />
                </form>
            </div>

        );
    }
}

export default Search