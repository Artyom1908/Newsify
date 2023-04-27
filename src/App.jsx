import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import SavedArticles from "./components/SavedArticles";

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
