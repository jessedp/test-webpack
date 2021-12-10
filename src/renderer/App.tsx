import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Store from 'electron-store';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  // window.electron.ipcRenderer.once('ipc-example', (arg) => {
  //   // eslint-disable-next-line no-console
  //   console.log(arg);
  // });
  const store = new Store();
  // window.electron.ipcRenderer.myPing();
  const test: any = store.get('test');
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        |{test}|
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
