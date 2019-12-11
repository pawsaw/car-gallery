import React, { Fragment, useState, useEffect } from 'react';
import './style/style.scss';
import Layout from './components/Layout/Layout';
import CarCollection from './components/CarCollection/CarCollection';
import { Car } from './domain/Car';
import domain from './domain/domain';
import { isCarServiceError } from './domain/CarService';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { Switch, Redirect, Route } from 'react-router';
import CarDetail from './components/CarDetail/CarDetail';

const App: React.FC = () => {

  const [cars, setCars] = useState([] as Car[]);
  const [error, setError] = useState('');


  async function loadAllCars() {
    try {
      const allCars = await domain.car.findAllCars();
      setCars(allCars);
    } catch (e) {
      if (isCarServiceError(e)) {
        setError(e.message);
      }
    }
  }

  useEffect(() => {
    loadAllCars();
  }, []);

  return (
    <Layout>
      <Fragment>
        {error ? <ErrorMessage message={error} /> : ''}
        <Switch>
          <Redirect exact from="/" to="/cars" />
          <Route path="/cars/:id" render={({ match }) => <CarDetail id={parseInt(match.params.id)} />} />
          <Route path="/cars" render={() => (<CarCollection cars={cars} />)} />
        </Switch>        
      </Fragment>
    </Layout>
  );
}

export default App;
