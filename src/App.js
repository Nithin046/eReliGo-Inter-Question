import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import AddEmpDetail from './components/AddEmpDetail';
import EmployeeDetails from './components/EmploeeDetails';


function App(){

  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/">
            <EmployeeDetails/>
          </Route>
          <Route path="/addemp">
            <AddEmpDetail/>
          </Route>



        </Switch>
      </div>
    </Router>
  )
}
export default App;