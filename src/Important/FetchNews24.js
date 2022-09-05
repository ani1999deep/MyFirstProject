import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FetchNews24 = () => {
  const [news, setNews] = useState([]);

  const fetchnews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=adf5af25d0f84a58b4590d48356be23d"
      )

      .then((response) => {
        setNews(response.data.articles);

        console.log("ok");
      })

      .catch((error) => {
        console(error);
      });
  };
  return (
    <>
      <div className="container">
        <button onClick={fetchnews}>Fetch News</button>
      </div>

      <div>
        {news.map((value) => {
          return (
            <div>
              <Card style={{ width: "45rem" }}>
                <Card.Img variant="top" src={value.urlToImage} />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                  <Button variant="primary" onClick={value.url}>
                    Go somewhere
                  </Button>
                </Card.Body>

                <button>
                  <Card.Link href="https://www.britannica.com/biography/Steve-Jobs">
                    Card Link
                  </Card.Link>
                </button>
                <button>
                  <Card.Link href="https://www.britannica.com/biography/Thomas-Edison">
                    Another Link
                  </Card.Link>
                </button>

                <Button variant="success">DONE</Button>
              </Card>
            </div>
          );
          
        })}
      </div>
    </>
  );
};

export default FetchNews24;
