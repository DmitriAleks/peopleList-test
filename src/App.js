import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import EmployeesList from "./components/Employees/EmployeesList";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/employees' component={EmployeesList}/>
            </Switch>
        </div>
    );
}

export default App;
