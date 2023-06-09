import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/homeScreen';
import SignUpScreen from './screens/signupScreen';
import LoginScreen from './screens/loginScreen';
import NotFoundScreen from './screens/notFoundScreen';
import productsScreen from './screens/productsScreen';
import productDetail from './screens/productDetail';
import contactScreen from './screens/contactScreen';
import cartScreen from './screens/cartScreen';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={HomeScreen} />
            <Route path="/cadastro" Component={SignUpScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="/produtos" Component={productsScreen} />
            <Route path="/contatos" Component={contactScreen} />
            <Route path="/carrinho" Component={cartScreen} />
            <Route path="/produto/:id" Component={productDetail} />
            <Route path="*" Component={NotFoundScreen} />
        </Routes>
    </BrowserRouter>
)

export default Router;