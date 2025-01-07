import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { getRoutes } from './routes/routes';
import { NavBar } from './components/layout/nav-bar';

const App = () => {
  const routes = getRoutes();


  return (
    <Router>
        <NavBar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<div className='mt-16 min-w-[300px] overflow-hidden'><route.component /></div>} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
