import React, { useState, useEffect } from "react";
import Img from "./Images";
import { createApi } from "unsplash-js";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import "./App.css";

function App() {
  const car = "cars";
  const [images, setimg] = useState([]);
  const [query, setquery] = useState(car);
  const [URL, setURL] = useState("");
  const [time, setTime] = useState(10);
  const [showcount, setshowcount] = useState(false);
  const [page, setpage] = useState(0);

  const handlechange = (e) => {
    setquery(e.target.value);
  };

  useEffect(() => {
    const URL =
      "https://api.unsplash.com/search/photos?page=" +
      1 +
      "&query= " +
      car +
      "&client_id=" +
      "vO5KMv6a7l2wXnmHV0-KbYglLMY20Djx482y56vNYUY";

    axios
      .get(URL)
      .then((response) => setimg(response.data.results))
      .then(() => {
        setTime(10);
      });
  }, []);
  const handleClick = (e) => {
    e.preventDefault();

    setpage(page + 1);
    const URL =
      "https://api.unsplash.com/search/photos?page=" +
      1 +
      "&query= " +
      query +
      "&client_id=" +
      "vO5KMv6a7l2wXnmHV0-KbYglLMY20Djx482y56vNYUY";

    axios
      .get(URL)
      .then((response) => setimg(response.data.results))
      .then(() => {
        setTime(10);
      });
  };

  const handlerefresh = () => {
    setshowcount(true);
    setpage(page + 1);
    // setcountpagestate(countpage - 1);

    setTimeout(() => {
      const URL =
        "https://api.unsplash.com/search/photos?page=" +
        page +
        2 +
        "&query= " +
        query +
        "&client_id=" +
        "vO5KMv6a7l2wXnmHV0-KbYglLMY20Djx482y56vNYUY";
      axios
        .get(URL)
        .then((response) => setimg(response.data.results))
        .then(() => {
          setTime(10);
        });
    }, 2000);
    setURL(URL);
  };

  return (
    <div className='App'>
      <h1 className='header'>Unsplash photos</h1>
      <input
        className='images'
        type='text'
        style={{ height: "2rem" }}
        placeholder='Search for.....'
        name='photos'
        value={query}
        onChange={handlechange}
      ></input>
      <button
        type='submit'
        style={{
          marginLeft: "3rem",
          backgroundColor: "skyblue",
        }}
        onClick={handleClick}
      >
        Search
      </button>

      <button
        style={{
          marginLeft: "3rem",
          backgroundColor: "skyblue",
        }}
        onClick={handlerefresh}
      >
        Counter
      </button>

      <Row className='images'>
        {images.map((image) => (
          <Col sm={6} md={6} lg={6}>
            <Img image={image.urls.small}></Img>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
