import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <body>
        <nav>
          <ul class='nav-list'>
            <li class='active'>
              <a href='index.html' aria-current='page'>
                Home
              </a>
            </li>
            <li>
              <a href='account.html'>Account</a>
            </li>
            <li>
              <a href='tvshow.html'>TV Shows</a>
            </li>
            <li>
              <a href='movies.html'>Movies</a>
            </li>
            <li>
              <a href='signout.html'>Sign Out</a>
            </li>
          </ul>
        </nav>

        <div>
          <div id='home-name'>
            <h1>Home</h1>
          </div>

          <form id='search-form'>
            <div class='container'>
              <input id='search-input' type='text' placeholder='Enter a name' />
              <button class='container-button'>Search</button>
            </div>
          </form>

          <label>Filter:</label>
          <select id='alphabet'>
            <option value='A-G'>A-G</option>
            <option value='H-N'>H-N</option>
            <option value='O-U'>O-U</option>
            <option value='V-Z'>V-Z</option>
          </select>

          <div id='sumOfMovies'>
            <h2 id='headerOfSum'>
              You added
              <span> 0 </span> movies to your watchlist
            </h2>
          </div>
          <div class='grid-container'></div>
        </div>
      </body>
    </div>
  );
}

export default App;
