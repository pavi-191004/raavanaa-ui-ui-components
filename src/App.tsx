import 'bootstrap/dist/css/bootstrap.min.css';
import '@radix-ui/colors/black-alpha.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './ui/pages/dashBoard/dashBoard';
import Companies from './ui/pages/companies/companies';
import ComponentsViewer from './ComponentsViewer';

function App () {
  return (
    <Router>
      
      <ComponentsViewer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </Router>
  )
}

export default App;
