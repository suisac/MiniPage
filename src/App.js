import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import appStore from './store/appStore';


function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Home/>
      <SideBar/>
    </div>
    </Provider>
  );
}

export default App;
