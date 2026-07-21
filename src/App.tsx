import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import VariablesPage from './pages/VariablesPage/VariablesPage';
import VariablePage from './pages/VariablePage/VariablePage';
import Layout from './layout/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/variables" element={<VariablesPage />} />
        <Route path="/variables/:id" element={<VariablePage />} />
      </Route>
    </Routes>
  );
}


export default App;
