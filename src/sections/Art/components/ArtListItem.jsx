import React from 'react'
import PublicationHistoryList from './PublicationHistoryList'

function ArtListItem({item}) {
  return (
    <li>
    <div className="frame">
      <img
        src={`https://boolean-api-server.fly.dev${item.imageURL}`}
      />
    </div>
    <h3>{item.title}</h3>
    <p>Artist: {item.artist}</p>
    <PublicationHistoryList pub={item.publicationHistory}/>
  </li>
  )
}

export default ArtListItem