import React from "react";
import "./etusivu.scss";
import NewsArticles from "../Newsarticles/NewsArticles";

export default function Etusivu() {
  return (
    <>
      <div className="etusivu">
      <div className="heading">
        <h2></h2>
      </div>

      <div className="content">
        <div className="left">
          <h2>Latest news</h2>
          <NewsArticles />
        </div>
        <div className="right">
          <h2>Upcoming competitions</h2>
        </div>
      </div>
      </div>
      </>
  );
}
