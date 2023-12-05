import React from 'react';
import AdminCss from './AdminPage.module.css';
import '../Layout.css'
import Header from '../Header';
import FormSection from './FormSection';
import HomeButton from './HomeButton';

const AdminPage = () => {
  return (
    <div>
      <div className='content'>
        <div className={AdminCss.AdminPage}>
          <Header data={{ title: "Admin Page", subHeader: "Welcome to Admin Page", name: "" }} />
          <FormSection />
        </div>
      </div>
      <div className={AdminCss.footer}>
        <HomeButton />
      </div>
    </div>
  )
}

export default AdminPage