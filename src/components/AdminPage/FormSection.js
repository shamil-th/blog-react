import React from 'react'
import BlogInput from './BlogInput'
import AdminCss from './AdminPage.module.css';




const FormSection = () => {
  return (
    <div className={AdminCss.form_section}>
        <BlogInput/>
    </div>
  )
}

export default FormSection