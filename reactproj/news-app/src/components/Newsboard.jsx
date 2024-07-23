import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
        {article.map((news, index) => {
          return (
            <Newsitem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </h2>
    </div>
  );
};

export default Newsboard;
