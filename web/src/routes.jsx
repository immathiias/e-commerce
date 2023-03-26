import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/homeScreen';
import SignUpScreen from './screens/signupScreen';
import LoginScreen from './screens/loginScreen';
import NotFoundScreen from './screens/notFoundScreen';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={HomeScreen} />
            <Route path="/cadastro" Component={SignUpScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="*" Component={NotFoundScreen} />
        </Routes>
    </BrowserRouter>
)

export default Router;