import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import GlobalStyle from './global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
);