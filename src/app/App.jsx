import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/index.css'
import { MainPage } from '../pages/MainPage/MainPage';
import { Layout } from '../widgets/Layout/Layout';
import { SecondPage } from '../pages/SecondPage/SecondPage';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route element={<Layout/>} path='/'>
          <Route element={<MainPage/>} path='/' />
          <Route element={<SecondPage/>} path='/enjoy' />
        </Route>
     </Routes>
    </div>
  );
}

export default App;
