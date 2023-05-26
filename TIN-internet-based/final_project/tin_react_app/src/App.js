import { Routes, Route } from "react-router-dom";
import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/Footer";
import EngineerList from "./components/engineer/EngineerList";
function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="engineers">
          <Route index={true} element={<EngineerList />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
