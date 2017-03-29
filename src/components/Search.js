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
    }
    onTermSubmission(event) {
        event.preventDefault();
        let term = this.state.term
        this.props.onSearchSubmit(term)
    }
    render() {
        return(
            <div className="search col-lg-6 col-lg-push-4" >
                <form onSubmit={event => this.onTermSubmission(event)}>
                    <span style={{ width: 80% }}>Search: </span>
                    <input onChange={event => this.onTermChange(event.target.value)} />
                </form>
            </div>

        );
    }
}

export default Search