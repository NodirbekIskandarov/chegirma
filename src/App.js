import { Route, Routes } from "react-router-dom";
import { AllProducts, Home, Main } from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="all_products" element={<AllProducts/>}/>
      </Route>
    </Routes>
  );
}

export default App;
