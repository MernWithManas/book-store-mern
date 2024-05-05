import { Routes, Route } from "react-router-dom";

import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import Home from "./pages/Home";
import BookDetails from "./pages/ShowBook";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/books/create" element={<CreateBook/>} />
      <Route path="/books/details" element={<BookDetails/>} />
      <Route path="/books/edit" element={<EditBook/>} />
      <Route path="/books/delete" element={<DeleteBook/>} />
    </Routes>
  )
}

export default App;