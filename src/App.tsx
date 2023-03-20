import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/PostPage";
import { useAppSelector } from "./hooks/redux";

function App() {
  const { openingPostId } = useAppSelector((state) => state.data);

  return (
    <div className="w-full h-[100vh] bg-slate-700 p-4">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post id={openingPostId} />} />
      </Routes>
    </div>
  );
}

export default App;
