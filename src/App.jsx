
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import EmptyPage from './pages/EmptyPage';
import NotFound from './pages/NotFound';
import AddCustomer from './pages/AddCustomer'
import Layout from './layouts/Layout';
import MainLayout from './layouts/MainLayout';
import  ProfilePage  from './pages/ProfilePage';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Protected Dashboard */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<EmptyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-customer" element={<AddCustomer />} />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
