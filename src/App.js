import React from 'react';

import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>

      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/10717151?s=460&v=4" alt="André Ricardo Lagacione" />
              <div className="user-info">
                <strong>André Ricardo Lagacione</strong>
                <span>Angular, Flutter, Java, Spring boot</span>
              </div>
            </header>

            <p>Full stack developer!</p>
            <a href="https://github.com/andreLagacione">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/10717151?s=460&v=4" alt="André Ricardo Lagacione" />
              <div className="user-info">
                <strong>André Ricardo Lagacione</strong>
                <span>Angular, Flutter, Java, Spring boot</span>
              </div>
            </header>

            <p>Full stack developer!</p>
            <a href="https://github.com/andreLagacione">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/10717151?s=460&v=4" alt="André Ricardo Lagacione" />
              <div className="user-info">
                <strong>André Ricardo Lagacione</strong>
                <span>Angular, Flutter, Java, Spring boot</span>
              </div>
            </header>

            <p>Full stack developer!</p>
            <a href="https://github.com/andreLagacione">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/10717151?s=460&v=4" alt="André Ricardo Lagacione" />
              <div className="user-info">
                <strong>André Ricardo Lagacione</strong>
                <span>Angular, Flutter, Java, Spring boot</span>
              </div>
            </header>

            <p>Full stack developer!</p>
            <a href="https://github.com/andreLagacione">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
