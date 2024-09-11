import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Features/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
