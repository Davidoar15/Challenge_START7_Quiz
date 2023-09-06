import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Error from './Components/Error/Error';
import QuestionSports from './Components/SportsQuestion/SportsQuestion';
import QuestionChemistry from './Components/ChemistryQuestion/ChemistryQuestion';
import QuestionMath from './Components/MathQuestion/MathQuestion';
import QuestionHistory from './Components/HistoryQuestion/HistoryQuestion';
import QuestionBiological from './Components/BiologicalQuestion/BiologicalQuestion';
import QuestionGeography from './Components/GeographyQuestion/GeographyQuestion';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    }
    const validRoutes = ["/question"];
    const isValidRoute = validRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    if (!isValidRoute) {
      navigate("/error");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question/Sports' element={<QuestionSports />} />
        <Route path='/question/Chemistry' element={<QuestionChemistry />} />
        <Route path='/question/Math' element={<QuestionMath />} />
        <Route path='/question/History' element={<QuestionHistory />} />
        <Route path='/question/Biological' element={<QuestionBiological />} />
        <Route path='/question/Geography' element={<QuestionGeography />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App
