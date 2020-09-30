import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [term, setTerm] = useState("React Js");
  const [debounceTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(term);
    }, 750);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceTerm,
        },
      });

      setResults(data.query.search);
    };

    search();
  }, [debounceTerm]);

  const renderredResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            GO
          </a>
        </div>

        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  const onChangeTerm = (term) => {
    setTerm(term);
  };

  return (
    <div>
      <div className=" ui form">
        <div className=" field">
          <label>Search:</label>
          <input
            className="input"
            type="text"
            placeholder="Search..."
            value={term}
            onChange={(e) => onChangeTerm(e.target.value)}
          />
        </div>
      </div>
      <div></div>
      <div className="ui celled list">{renderredResults}</div>
    </div>
  );
};

export default SearchBar;
