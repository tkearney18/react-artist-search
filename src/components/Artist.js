import React from 'react'

const Artist = ({ artist, classes }) => {
    return(
        <div className={ classes }>
            <a href={ artist.link }> <h2>{ artist.name }</h2></a>
                <img src={ artist.image } />
                <ul>
                    {artist.genres.map(g =>
                        <li key={Math.random()}>{g}</li>
                    )}
                </ul>

        </div>
    )
}

export default Artist