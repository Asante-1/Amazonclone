
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';


const promise = loadStripe(
  'pk_test_51K2kHoLdK2JdvTteFDgJVaZL13exdvjywoaBvZgMHCAxbp5h2UsdeE3EFZPKY37PPwA0MF15ZrgyAsEtcDsXCjsJ00ep6hVkRu'
  );

function App() {
  const [{user}, dispatch] = useStateValue();

  

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("user signed in or out", authUser);
      console.log('context', user)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user : authUser
        })
      }
      else {
        dispatch({
          // the user is logged out 
          type : 'SET_USER',
          user : null
        })
      }

    })
  }, []) 



  
  return (

    <Router>
    <div className="App">
    
     <Switch> 
     <Route path="/login">
            
           <Login/>
        </Route>
        <Route path="/checkout">
        <Header/>
            <Checkout/>
        </Route>

        <Route path="/payment">
         <Header/>
        <Elements stripe={promise} >
          <Payment />
        </Elements>
            
       </Route>


        <Route path="/">
        <Header/>
          <Home />
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
