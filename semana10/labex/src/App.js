import { useState } from 'react'
import axios from 'axios'
import AdminHomePage from './Pages/AdminHomePage'
import ApplicationFormPage from './Pages/ApplicationFormPage'
import CreateTripPage from './Pages/CreateTripPage'
import HomePage from './Pages/HomePage'
import ListTripsPage from './Pages/ListTripsPage'
import LoginPage from './Pages/LoginPage'
import TripDeteilsPage from './Pages/TripDetailsPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {

  const [viagens, setViagens] = useState([])

  const pegaViagens = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-goncalves-maryam/trips"
    axios.get(url)
    .then((response) => {
        setViagens(response.data.trips)
    }).catch((error) => {
        alert(error.response.data.message)
    })
}

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/admin/trips/list"}>
          <AdminHomePage/>
        </Route>

        <Route exact path={"/trips/application"}>
          <ApplicationFormPage/>
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage/>
        </Route>

        <Route exact path={"/"}>
          <HomePage/>
        </Route>

        <Route exact path={"/trip/list"}>
          <ListTripsPage
          viagens={viagens}
          mostraViagens={pegaViagens}/>
        </Route>

        <Route exact path={"/login"}>
          <LoginPage/>
        </Route>

        <Route exact path={"/admin/trips/:id"}>
          <TripDeteilsPage/>
        </Route>  
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
