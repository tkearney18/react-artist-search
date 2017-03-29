import React from 'react'
import Artist from './Artist'

const RelatedArtists = ({ relatedArtists }) => {
    console.log(relatedArtists)
        return(
            <div>
                <div>
                    {relatedArtists.map( artist =>
                        <Artist key={Math.random()} artist={ artist } />)
                    }
                </div>
            </div>
        )
}

export default RelatedArtists;
