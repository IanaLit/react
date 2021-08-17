import React, { FormEvent, useEffect, useState } from 'react';
import errorStateInterface from '../../interfaces/errorStateInterface';
import { Popup } from '../popup/popup';

import './form.scss';

export const Form = ({ setFormValues }:{ setFormValues: any }) => {
  const [firstName, setFirstName] = useState(''); // text
  const [lastName, setLastName] = useState(''); // text
  const [zipCode, setZipCode] = useState(''); // text
  const [birthDate, setBirthDate] = useState('');// date
  const [deliveryDate, setDeliveryDate] = useState('');// date
  const [country, setCountry] = useState('Russia'); // select
  const [gender, setGender] = useState(false); // radio
  const [coupon, setCoupon] = useState(false); // check
  const [samples, setSamples] = useState(false);// check
  const [pocket, setPocket] = useState(false);// check
  const [agree, setAgree] = useState(false);// checkbox
  const [showPopup, setShowPopup] = useState(false);

  const [errors, setErrors] = useState({});

  const reset = () => {
    setFirstName('');
    setLastName('');
    setZipCode('');
    setBirthDate('');
    setDeliveryDate('');
    setCountry('Russia');
    setCoupon(false);
    setSamples(false);
    setPocket(false);
    setGender(false);
    setAgree(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const validate = () => {
    setErrors({});

    const age = +new Date().getFullYear() - +new Date(birthDate).getFullYear();
    const deliveryTime = +new Date(deliveryDate).getTime() - +new Date().getTime();
    if (firstName.length < 3 || firstName.length > 20) {
      setErrors((state) => ({ ...state, firstName }));
    }
    if (lastName.length < 3 || lastName.length > 20) {
      setErrors((state) => ({ ...state, lastName }));
    }
    if (zipCode.length !== 6) {
      setErrors((state) => ({ ...state, zipCode }));
    }
    if (!birthDate || age < 18) {
      setErrors((state) => ({ ...state, birthDate }));
    }
    if (!deliveryDate || deliveryTime < 0) {
      setErrors((state) => ({ ...state, deliveryDate }));
    }
    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
  };
  useEffect(() => {
    validate();
  }, [firstName, lastName, zipCode, birthDate, deliveryDate, agree]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    (event as unknown as HTMLFormElement).preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state: []) => [...state, {
        firstName, lastName, zipCode, birthDate, deliveryDate, country, coupon, samples, pocket, gender, agree,
      }]);
      reset();
      setShowPopup(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">

        <div className="column">
          <label htmlFor="firstName" className="firstName">
            <p>
              First Name:
              {((errors as errorStateInterface).firstName || (errors as errorStateInterface).firstName === '') && <span className="error">*Enter your name</span>}
            </p>
            <input type="text" value={firstName} name="firstName" onChange={(event) => setFirstName(event.target.value)} />
          </label>
          <label htmlFor="lastName" className="lastName">
            <p>
              Last Name:
              {((errors as errorStateInterface).lastName || (errors as errorStateInterface)?.lastName === '') && <span className="error">*enter your last name</span>}
            </p>
            <input type="text" value={lastName} name="lastName" onChange={(event) => setLastName(event.target.value)} />
          </label>

          <div className="gender">
            <h5>Gender</h5>
            <label htmlFor="male">
              Male
              <input
                type="radio"
                id="male"
                name="gender"
                onChange={() => setGender((prev) => !prev)}
                checked={!gender}
              />
            </label>
            <label htmlFor="female">
              Female
              <input
                type="radio"
                id="female"
                name="gender"
                onChange={() => setGender((prev) => !prev)}
                checked={gender}
              />
            </label>
          </div>
        </div>
        <div className="column">
          <label htmlFor="birthDate" className="label">
            <p>
              Birth Date:
              {((errors as errorStateInterface).birthDate || (errors as errorStateInterface).birthDate === '') && <span className="error">*must be over 18</span>}
            </p>
            <input type="date" value={birthDate} name="birthDate" onChange={(event) => setBirthDate(event.target.value)} />
          </label>
          <label htmlFor="deliveryDate" className="label">
            <p>
              Delivery Date:
              {((errors as errorStateInterface).deliveryDate || (errors as errorStateInterface).deliveryDate === '') && <span className="error">*tomorrow or later</span>}
            </p>
            <input
              type="date"
              value={deliveryDate}
              name="deliveryDate"
              onChange={(event) => {
                console.log('delivery:', event.target.value);
                setDeliveryDate(event.target.value);
              }}
            />

          </label>
          <label htmlFor="zipCode" className="zipCode">
            <p>
              Zip Code:
              {((errors as errorStateInterface).zipCode || (errors as errorStateInterface).zipCode === '') && (
                <span className="error">
                  *
                  6 numbers
                </span>
              )}
            </p>
            <input type="text" value={zipCode} name="zipCode" onChange={(event) => setZipCode(event.target.value)} />
          </label>
          <label htmlFor="country" className="label">
            <p>
              Country:
            </p>
            <select className="select" name="country" value="country" onChange={(event) => setCountry(event.target.value)}>
              <option>Russia</option>
              <option>Belarus</option>
              <option>Ukraine</option>
            </select>
          </label>

        </div>
        <div className="column">
          <div className="gifts">
            <h5>Gifts</h5>
            <label htmlFor="coupon" className="label">
              <p>
                Coupon:
              </p>
              <input type="checkbox" checked={coupon} name="coupon" onChange={() => setCoupon((prev) => !prev)} />
            </label>
            <label htmlFor="samples" className="label">
              <p>
                Samples:
              </p>
              <input type="checkbox" checked={samples} name="samples" onChange={() => setSamples((prev) => !prev)} />
            </label>
            <label htmlFor="pocket" className="label">
              <p>
                Pocket:
              </p>
              <input type="checkbox" checked={pocket} name="pocket" onChange={() => setPocket((prev) => !prev)} />
            </label>
          </div>
          <label htmlFor="agree" className="label">
            <p>
              Agree:
              {((errors as errorStateInterface).agree || (errors as errorStateInterface).agree !== undefined) && <span className="error">*agree</span>}
            </p>
            <input type="checkbox" checked={agree} name="agree" onChange={() => setAgree((prev) => !prev)} />
          </label>

          <div className="form-button">
            <input className="button_submit" type="submit" value="send" />
          </div>
        </div>
      </form>
      {showPopup && <Popup closePopup={togglePopup} /> }
    </div>
  );
};
