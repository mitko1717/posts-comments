import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <div className="w-full h-[100vh] bg-slate-700 p-4">
      {/* <Posts /> */}
      <Routes>
        <Route path="/" element={<Posts />} />
        {/* <Route path="/:post" element={<Post />} /> */}
      </Routes>
    </div>
  );
}

export default App;
