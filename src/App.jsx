import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SearchPage from "./components/Search/SearchPage";
import SavedArticles from "./components/SavedArticles/SavedArticles";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-articles" element={<SavedArticles />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App;
