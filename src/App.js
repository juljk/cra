import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from 'react-router-dom';
import NotFound from './components/common/NotFound';
import PagePeople from './components/PagePeople.jsx';
import PagePlanets from './components/PagePlanets.jsx';
import PageStarships from './components/PageStarships.jsx';
import dataPeople from './data/dataPeople.js';
import dataPlanets from './data/dataPlanets.js';
import dataStarships from './data/dataStarships.js';

// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const columns = Object.keys(dataPeople[0]);

function App() {
    const [people, setPeople] = useState(dataPeople);
    const [planets, setPlanets] = useState(dataPlanets);
    const [starships, setStarships] = useState(dataStarships);
    
    const handleAppPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data)
    }

    const handleAppPlanets = (planetsData) => {
        const data = [...planets, planetsData];
        setPlanets(data)
    }
    
    const handleAppStarships = (starshipsData) => {
        const data = [...starships, starshipsData];
        setStarships(data)
    }

    const getInitialData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    const handleDeletePeople = (id) => {
        const data = [...people];
        
        setPeople(data.filter((item, index) => id !== index));
    }

    const handleDeletePlanets = (id) => {
        const data = [...planets];
        
        setPlanets(data.filter((item, index) => id !== index));
    }

    const handleDeleteStarships = (id) => {
        const data = [...starships];
        
        setStarships(data.filter((item, index) => id !== index));
    }

    return (
        <Router>
            <div className="container">
                <nav className="nav nav-pills nav-fill">
                    <NavLink to="/people" className="nav-item nav-link">People</NavLink>
                    <NavLink to="/planets" className="nav-item nav-link">Planets</NavLink>
                    <NavLink to="/starships" className="nav-item nav-link">Starships</NavLink>
                </nav>

                <Switch>
                    <Route path="/people">
                        <PagePeople 
                            data={people}
                            columns={columns}
                            tableDescriptor="People"
                            initialData={getInitialData()}
                            onAddData={handleAppPerson}
                            deleteButton={handleDeletePeople}
                        />
                    </Route>
                    <Route path="/planets">
                        <PagePlanets 
                            data={planets}
                            columns={columns}
                            tableDescriptor="Planets"
                            initialData={getInitialData()}
                            onAddData={handleAppPlanets}
                            deleteButton={handleDeletePlanets}
                        />
                    </Route>
                    <Route path="/starships">
                        <PageStarships 
                            data={starships}
                            columns={columns}
                            tableDescriptor="Starships"
                            initialData={getInitialData()}
                            onAddData={handleAppStarships}
                            deleteButton={handleDeleteStarships}
                        />
                    </Route>
                    <Redirect exact from="/" to="/people" />
                    <Route path="/404">
                        <NotFound
                            title="404"
                        />
                    </Route>
                    <Redirect from="*" to="/404" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
