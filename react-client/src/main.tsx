
import ReactDOM from "react-dom/client"
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
