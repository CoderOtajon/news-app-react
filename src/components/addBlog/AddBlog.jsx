import React from "react"
import { Link, useNavigate } from "react-router-dom"

import "./AddBlog.scss"
const AddBlog = ({ type }) => {
  return (
    <div className="add-blog">
      <div className="header">
        <h1>Добавить {type === "articles" ? "Статьи" : "Новость"}</h1>
      </div>

      <form action="" className="form">
        <h3>Загаловок</h3>
        <input type="text" />
        <h3>Анонс</h3>
        <input type="text" />

        <h3>Текст новости</h3>
        <input id="news" type="text" />

        <h3>Фото</h3>
        <div id="photo">
          <input type="text" placeholder="Выберите файл" />
          <button>Загрузить</button>
        </div>
        <div className="btns">
          <Link to={`/${type}`}>
            <button>Отменить</button>
          </Link>
          <Link to={`${type}`}>
            <button>
              Добавить {type === "articles" ? "Статьи" : "Новость"}
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AddBlog
