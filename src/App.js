import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from 'react-router';
import { Header } from './components/header';
import Approuter from './routes/approuter';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Approuter />
      </BrowserRouter>
    </>

  );
}

export default App;
