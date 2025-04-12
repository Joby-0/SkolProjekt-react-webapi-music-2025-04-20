import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListPage } from './pages/ListPage';
import { Header } from './components/header';

function App() {
  return (
    <>
    <Header/>
    <ListPage/>
    </>
    
  );
}

export default App;
