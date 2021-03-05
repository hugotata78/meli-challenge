
import './App.css';
import { store } from './Redux/store';
import { Provider } from 'react-redux'
import { Routes } from './Components/Routes';


function App() {
  
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
