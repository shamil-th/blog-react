import React from 'react'
import TagsCss from './Tags.module.css'
import TagsList from './TagsList'
const Tags = ({ datas, gettag }) => {
  return (
    <div className={TagsCss.tags}>
      <header>Tags</header>

      <ul className={TagsCss.places}>
        <TagsList datas={datas} gettag={gettag} />

      </ul>
      <button onClick={() => gettag("")}>Clear Tags</button>
    </div>
  )
}

export default Tags