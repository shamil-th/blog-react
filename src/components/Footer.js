import React from 'react'
import FooterCss from './Footer.module.css'

const footer = () => {
  return (
    <div className={FooterCss.footer}>
      <div className={FooterCss.buttons}>
        <button className={FooterCss.previous}>Previous</button>
        <button className={FooterCss.next}>Next<span className="material-symbols-outlined">
          double_arrow
        </span></button>
      </div>
    </div>
  )
}

export default footer