import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListPage } from './pages/ListPage';
import { Header } from './components/header';
import { ViewPage } from './pages/ViewPage';

function App() {
  return (
    <>
    <Header/>
    <ViewPage/>
    </>
    
  );
}

export default App;
