import { Button } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import "./News.scss"

function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str
}

function formatDate(d) {
  const date = new Date(d)
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  return `${day}/${month}/${year}г`
}

const News = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [newsData, setNewsData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news",
      params: { safeSearch: "Off", textFormat: "Raw" },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "e6e1c3a97bmshf95aa1ae646f76bp17a1f2jsnffe5c9fdbe67",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    }

    const getRequest = async () => {
      try {
        setLoading(true)
        const data = await axios.request(options)
        setLoading(false)
        setNewsData(data.data.value)
      } catch (err) {
        setLoading(false)
        setError(true)
      }
    }
    getRequest()
  }, [])

  return (
    <div className="news">
      <div className="news-header">
        <h1>Новости</h1>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007fff",
          }}
          onClick={() => navigate("addNews")}
        >
          + Добавить
        </Button>
      </div>
      <div className="contents">
        {!error && loading && <h1>...Загрузка</h1>}
        {error && !loading && (
          <h1>Что-то пошло не так. Пожалуйста, попытайтесь еще раз</h1>
        )}
        {!loading &&
          !error &&
          newsData.map((data) => (
            <a
              style={{
                all: "unset",
              }}
              href={data?.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="content">
                <img src={data?.image?.thumbnail?.contentUrl} alt="content" />
                <div className="content-text">
                  <h3>{truncate(data?.name, 20)}</h3>
                  <p>{truncate(data?.description, 70)}</p>

                  <p style={{ textAlign: "right", marginRight: "10px" }}>
                    {formatDate(data?.datePublished)}
                  </p>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  )
}

export default News
