import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import NewTask from "./components/pages/NewTask";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Testes from "./components/pages/Testes";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="/testes" element={<Testes />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
