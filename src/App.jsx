import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            <Footer />
            <Outlet />
        </>
    )
}

export default App;