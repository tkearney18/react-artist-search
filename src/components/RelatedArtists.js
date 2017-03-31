import React from 'react'
import Artist from './Artist'
import _ from 'lodash'

const RelatedArtists = ({ relatedArtists }) => {
    let groups = _.chunk(relatedArtists, 4);
    return(
        <div>
            {groups.map(renderRow)}
        </div>
    )
    function renderRow(row) {
        return(
            <div className="row">
                { row.map(renderItem) } 
            </div>
        )
    }
    function renderItem(item) {
        return(
            <div className="col-sm-3">
                <Artist artist={item} />
            </div>
        )
    }
}

            // {relatedArtists.map( artist =>
            //     <Artist key={Math.random()} artist={ artist }/>)
            // }
export default RelatedArtists;
