function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [backgroundColor, setBackgroundColor] = React.useState("#f9f9f9");
  
    React.useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        setQuotes(data);
        let randIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randIndex]);
      }
  
      fetchData();
    }, []);
  
    const getNewQuote = () => {
      const colors = [
        "#ECD078",
        "#D95B43",
        "#C02942",
        "#542437",
        "#53777A",
        "#FFF1D8",
        "#27296D",
        "#9C9A40",
        "#FA6900",
        "#F38630"
      ];
  
      let randIndex = Math.floor(Math.random() * quotes.length);
      let randColorIndex = Math.floor(Math.random() * colors.length);
      setRandomQuote(quotes[randIndex]);
      setBackgroundColor(colors[randColorIndex]);
    };
  
    return (
      <div>
        <div className="container pt-5">
          <div className="jumbotron">
            <div className="card" style={{ backgroundColor: backgroundColor }}>
              <div className="card-header">
                <h2 className="display-4">Inspirational Quotes</h2>
              </div>
              <div className="card-body">
                {randomQuote ? (
                  <>
                    <h5 className="card-title">- {randomQuote.author || "Unknown"}</h5>
                    <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                  </>
                ) : (
                  <h2>Loading...</h2>
                )}
                <div className="row mt-4">
                  <button onClick={getNewQuote} className="btn btn-primary col-4 mx-auto">
                    New Quote
                  </button>
                  <div className="col-6 text-center">
                    <a
                      href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
                        `"${randomQuote.text}" - ${randomQuote.author}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-info m-2"
                    >
                      <i className="fab fa-twitter"></i> Share on Twitter
                    </a>
                    <a
                      href={`https://www.tumblr.com/share/quotes?caption=${encodeURIComponent(
                        `"${randomQuote.text}" - ${randomQuote.author}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary m-2"
                    >
                      <i className="fab fa-tumblr"></i> Share on Tumblr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>App by Philomena Kyalo</p>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));
  
