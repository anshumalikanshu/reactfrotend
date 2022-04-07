import Fotter from './components/Fotter'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen'
import ProductScreen from './components/screens/ProductScreen'

function App() {
  return (
    
    <Router >
        <Header/>
         <main className="py-3">
           <Container > 
             <Routes>
           <Route path='/' element={<HomeScreen />}  exact > </Route>
           <Route path='/product/:id' element={<ProductScreen />}   > </Route>
       </Routes>
           </Container>
           </main>
        <Fotter />
    </Router>
  );
}

export default App;
