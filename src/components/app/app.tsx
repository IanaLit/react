import React, { useState } from 'react';
import CardInterface from '../../interfaces/cardInterface';
import { Dashboard } from '../../pages/dashboard';
import Card from '../card/card';
import { Form } from '../form/form';
import SearchPanel from '../search-panel/search-panel';
import './app.scss';

export function App(): JSX.Element {
  const [formValues, setFormValues] = useState([]);
  return (
    <div className="app">
      <Dashboard />
      {/* <SearchPanel /> */}
      {/* <Form setFormValues={setFormValues} /> */}
      {/* <div className="cards">
        {formValues.map((item: CardInterface) => (
          <Card
            key={+new Date().getTime()}
            firstName={item.firstName}
            lastName={item.lastName}
            zipCode={item.zipCode}
            birthDate={item.birthDate}
            deliveryDate={item.deliveryDate}
            country={item.country}
            coupon={item.coupon}
            samples={item.samples}
            pocket={item.pocket}
            gender={item.gender}
            agree={item.agree}
          />
        ))}
      </div> */}
    </div>
  );
}
