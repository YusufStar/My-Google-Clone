import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<HomeScreen/>}/>
      <Route path="/Search/:id" element={<SearchScreen/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
