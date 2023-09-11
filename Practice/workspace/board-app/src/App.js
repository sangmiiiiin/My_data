import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/layout'
import Home from './pages/home';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
