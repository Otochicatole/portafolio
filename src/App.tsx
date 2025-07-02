import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { getRoutes } from './routes/routes';
import { NavBar } from "./components/layout/nav-bar.tsx";
import ScrollToTop from './components/layout/scroll-top.tsx';

const App = () => {
    const routes = getRoutes();


    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </Router>
    );
};

export default App;
