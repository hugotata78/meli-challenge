
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { store } from './Redux/store';
import { Provider } from 'react-redux'
import { Routes } from './Routes';


function App() {
  
  return (
    <div className='App'>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
