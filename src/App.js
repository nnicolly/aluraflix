import './App.css';

import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Filme from './pages/Filme';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/filme" component={Filme} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
