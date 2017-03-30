import React from 'react'
import Artist from './Artist'

const RelatedArtists = ({ relatedArtists }) => {
    return(
        <div>
            {relatedArtists.map( artist =>
                <Artist key={Math.random()} artist={ artist }/>)
            }
        </div>
    )
}

export default RelatedArtists;
