import React from 'react'

const Artist = ({ artist }) => {
    return(
        <div>
            <a href={ artist.href }> <h2>{ artist.name }</h2></a>
                {!artist.images.length ? <p>No Image Available</p> : <img src={ artist.images[0].url } style={{ 
                    height: 100, width: 100
                }} />}
                <ul>
                    {artist.genres.map(g =>
                        <li key={Math.random()}>{g}</li>
                    )}
                </ul>

        </div>
    )
}

export default Artist