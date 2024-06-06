import { Route, Routes } from "react-router-dom";
import { Home, Main } from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
