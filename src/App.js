import { Route, Routes } from "react-router-dom";
import { AllProducts, Compare, ControlPanel, Detail, Favourites, Filter, Home, Main, SignUp } from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="all_products" element={<AllProducts/>}/>
        <Route path="filter" element={<Filter/>}/>
        <Route path="detail" element={<Detail/>}/>
        <Route path="compare" element={<Compare/>}/>
        <Route path="favourites" element={<Favourites/>}/>
        <Route path="sign_up" element={<SignUp/>}/>
        <Route path="control_panel" element={<ControlPanel/>}/>
      </Route>
    </Routes>
  );
}

export default App;
