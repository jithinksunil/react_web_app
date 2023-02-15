import {BrowserRouter , Routes , Route} from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import UserProfilePage from './Pages/UserProfilePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import AdminPage from './Pages/AdminPage';
import AdduserPage from './Pages/AdduserPage';
import EdituserPage from './Pages/EdituserPage';
import ViewuserPage from './Pages/ViewuserPage';

function App() {

  return (
    
    <div className="App">
      <BrowserRouter> {/*wrapping with BrowserRouter*/}
        <Routes> {/*wrapping with browser Routes*/}
        
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/userprofile' element={<UserProfilePage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/adduser' element={<AdduserPage/>}/>
          <Route path='/edituser' element={<EdituserPage/>}/>
          <Route path='/viewuser' element={<ViewuserPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
