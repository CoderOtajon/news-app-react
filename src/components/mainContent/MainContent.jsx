import React from "react"
import { Route, Routes } from "react-router-dom"
import News from "../news/News"
import Articles from "../articles/Articles"
import AddBlog from "../addBlog/AddBlog"

const MainContent = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="news" element={<News />} />
        <Route path="articles" element={<Articles />} />
        <Route path="news/addNews" element={<AddBlog type="news" />} />
        <Route
          path="articles/addArticles"
          element={<AddBlog type="articles" />}
        />
      </Routes>
    </div>
  )
}

export default MainContent
