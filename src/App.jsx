import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
        <div id='page-container'>
            <Header />
            <Outlet />
            <Footer />
            </div>
        </>
    )
}

export default App;