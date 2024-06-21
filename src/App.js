import { Route, Routes } from "react-router-dom";
import { AllProducts, Detail, Filter, Home, Main } from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="all_products" element={<AllProducts/>}/>
        <Route path="filter" element={<Filter/>}/>
        <Route path="detail" element={<Detail/>}/>
      </Route>
    </Routes>
  );
}

export default App;
