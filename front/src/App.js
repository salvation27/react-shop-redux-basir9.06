import './App.css';
import Nav from './components/Nav/Nav'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomeScreen from './components/HoneScreen/HomeScreen'
import Detail from './components/Detail/Detail'
import CartScreen from './components/CartScreen/CartScreen';



function App() {

  return (
	<>
		<Router>
		<Nav />
			<Switch>
				<Route path='/' exact component={HomeScreen}  />
				<Route path='/products/:id' exact component={Detail}  />
				<Route path='/cart/:id?' exact component={CartScreen}  />
			</Switch>
		</Router>
  </>
  );
}

export default App;
