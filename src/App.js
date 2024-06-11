import { Route, Routes } from "react-router-dom";
import { AllProducts, Filter, Home, Main } from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="all_products" element={<AllProducts/>}/>
        <Route path="filter" element={<Filter/>}/>
      </Route>
    </Routes>
  );
}

export default App;
