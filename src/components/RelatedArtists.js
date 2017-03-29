import React from 'react'
import Artist from './Artist'

const RelatedArtists = ({ relatedArtists, classes }) => {
        return(
            <div>
                {relatedArtists.map( artist =>
                    <Artist key={Math.random()} artist={ artist } classes={ classes }/>)
                }
            </div>
        )
}

export default RelatedArtists;
