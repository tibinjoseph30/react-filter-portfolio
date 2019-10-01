import React from "react";
import { Container, Row, Col } from "reactstrap";
import PortfolioItem from "./PortfolioItem";
function Portfolio() {
  const portfoliolist = [
    {
      id: 1,
      number: "1",
      category: "movie"
    },
    {
      id: 2,
      number: "2",
      category: "news"
    },
    {
      id: 3,
      number: "3",
      category: "sports"
    },
    {
      id: 4,
      number: "4",
      category: "music"
    },
    {
      id: 5,
      number: "5",
      category: "sports"
    },
    {
      id: 6,
      number: "6",
      category: "movie"
    },
    {
      id: 7,
      number: "7",
      category: "music"
    },
    {
      id: 8,
      number: "8",
      category: "music"
    }
  ];
  const categorylist = [
    { id: 1, category: "all", value: "all" },
    { id: 2, category: "news", value: "all" },
    { id: 3, category: "sports", value: "all" },
    { id: 4, category: "music", value: "all" },
    { id: 5, category: "movie", value: "all" }
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col md="12">
            <ul className="portfolio-nav">
              {categorylist.map(types => (
                <li>
                  <a>{types.category}</a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          {portfoliolist.map(item => (
            <Col md="3" className="mb-4" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
