import './App.css';
import PokemonFilter from './PokemonFilter';

function App() {
  return (
    <div className='App'>
      <header class="app-level-header">
        <div class="logo">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pokemon-icon.png" alt="" width="45px" />
          <h1>Pokemon</h1>
        </div>
        <nav class="navbar">
          <div><a href="*">PokemonAPI</a></div>
          <div><a href="*">Pokemon Official</a></div>
          <div><a href="*">About Author</a></div>
        </nav>
      </header>
      <PokemonFilter />
      <footer class="bottom-links">
        <div class="footer-icons">
          <a href=""><i class="bi bi-facebook"></i>
          </a>
          <a href=""><i class="bi bi-instagram"></i>
          </a>
          <a href=""><i class="bi bi-youtube"></i>
          </a>
        </div>
        <div class="footer-text">&copy;Copyright 2024 By Berkay :)</div>
      </footer>
    </div>
  );
}

export default App;
