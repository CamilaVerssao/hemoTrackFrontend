import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// imports dos componentes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="*" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
