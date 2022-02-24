import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
