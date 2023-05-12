import { Route, Routes} from 'react-router-dom';
import './utils/styles/animations.scss'
import './App.css';
import StartPage from './pages/startpage/StartPage';
import MainPage from './pages/mainpage/MainPage';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </div> 
  );
}

export default App;
