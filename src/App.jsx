import '../public/assets/App.css'
import SignUp from './components/auth/SignUp'
import Customer from './components/management/Customer'
import DetailsPage from './components/management//DetailsPage'
import Admin from './components/management/Admin'
import Footer from './components/Footer'
import Header from './components/management/Header'
import ListCustomerComponents from './components/management/ListCustomerComponents'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PublicLayout from './components/PublicLayout'
import AllProduct from './components/AllProduct'
import SharedProvider from './context/SharedProvider'
import LogIn from './components/auth/LogIn'
import RequireAuth from './components/auth/RequireAuth'
import About_us from './components/About_us'
import Contact_us from './components/Contact_us'

function App() {
  
  const ROLES ={
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
  }

  return ( 
    <>
      <SharedProvider>  
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<PublicLayout />}></Route>
            <Route path='/login' element={<LogIn />} />
            <Route path='/allProduct' element={<AllProduct />}/>
            <Route path='/register' element={<SignUp />}></Route>
            <Route path='/about_us' element={<About_us />}></Route>
            <Route path='/contact_us' element={<Contact_us />}></Route>
            {/* we want to protect these routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path='/' element={<PublicLayout />}/>
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Editor]}/>}>
              <Route path='/editor' element = { <ListCustomerComponents /> }></Route>
              <Route path='/customer/all' element = { <ListCustomerComponents /> } />
              <Route path='/customer/add' element = { <Customer /> } />
              <Route path='/customer/update/:id' element = {<Customer />} />
              <Route path='/customer/details-page/:id' element = {<DetailsPage />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path='/admin' element ={<Admin />}/>
              <Route path='/customer/all' element = { <ListCustomerComponents /> } />
              <Route path='/customer/add' element = { <Customer /> } />
              <Route path='/customer/update/:id' element = {<Customer />} />
              <Route path='/customer/details-page/:id' element = {<DetailsPage />} />
            </Route>
            {/* Private Routes */}
            
          </Routes>
          {/* <Footer /> */}
      </SharedProvider>
    </>
  )
}

export default App
