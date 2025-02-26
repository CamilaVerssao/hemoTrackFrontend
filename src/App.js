import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imports dos componentes
import Header from "./components/Header";
import Hospital from "./pages/Hospital";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Flex container para o layout */}
        <Header />
        <main className="flex-1 mt-[10vh]"> {/* O conteúdo ocupa o restante da tela */}
          <Routes>
            {/* <Route path="/" element={<></>} /> */}
            <Route path="/hospital" element={<Hospital />} />
            <Route path="*" element={<></>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
