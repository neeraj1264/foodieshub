import Header from './components/header/Header';
import { Outlet } from 'react-router';
function Layout() {

    return (
     <>
         <div className="app-container">
     <Header/>
     <div className='main-content'>
     <Outlet/>
     </div>
     </div>
     </>
    )
  }
  
  export default Layout