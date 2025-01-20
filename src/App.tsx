import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyTools from "./pages/MyTools";

const App = () => {
  return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tools" element={<MyTools/>} />
          </Routes>
          
        </div>
      </main>
  );
};

export default App;
