import { useState } from 'react'

import EmptyPage from './pages/EmptyPage'
import NotFound from './pages/NotFound'
import DashboardLayout from './layouts/DashboardLayout'
import { Route, Routes } from 'react-router-dom'
import AddCustomer from './pages/AddCustomer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      {/* Layout-wrapped routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<EmptyPage />} />
        <Route path="/add-customer" element={<AddCustomer/>} />
      
        
      </Route>

      {/* Not Found Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    

  )
}

export default App
