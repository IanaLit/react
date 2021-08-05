import React, { FormEvent} from "react";
import { useState } from "react";
import './form.scss';

export const Form = ({setFormValues}:{setFormValues: any}) => {

    const [firstName, setFirstName] = useState(''); //text
    const [lastName, setLastName] = useState(''); //text
    const [zipCode, setZipCode] = useState(''); //text
    const [birthDate, setBirthDate] = useState('');//date
    const [deliveryDate, setDeliveryDate] = useState('');//date
    const [country, setCountry] = useState('Russia'); //select
    const [gender, setGender] = useState(false);
    const [coupon, setCoupon] = useState(false);
    const [samples, setSamples] = useState(false);
    const [pocket, setPocket] = useState(false);
    const [agree, setAgree] = useState(false);//checkbox
    

    
   
    


    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        (event as unknown as HTMLFormElement).preventDefault();
        // console.log(address, imageUrl, info, publishDate, like, agree);
        
        setFormValues((state: []) => [...state, {firstName, lastName, zipCode, birthDate, deliveryDate, country, coupon, samples, pocket, gender, agree}]);
    }
    return(
        <form onSubmit = {handleSubmit} className = 'form' >

<div className="column">
            <label htmlFor="firstName" className="firstName">
                <p>
                    First Name:
                    {/* {errors?.info === '' && <span className='error'>*info</span>} */}
                </p>
                <input type="text" value={firstName} name="firstName" onChange={(event)=>setFirstName(event.target.value)}>
                </input>
            </label>
            <label htmlFor="lastName" className="lastName">
                <p>
                    Last Name:
                    {/* {errors?.info === '' && <span className='error'>*info</span>} */}
                </p>
                <input type="text" value={lastName} name="lastName" onChange={(event)=>setLastName(event.target.value)}>
                </input>
            </label>
            
            <div className ="gender">
            <h5>Gender</h5><label htmlFor="male">Male
            <input
                    type="radio"
                    id="male"
                    name="gender"
                    onChange={()=>setGender(prev => !prev)}
                    checked={!gender}
                />
                </label>
<label htmlFor="female">Female
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    onChange={()=>setGender(prev => !prev)}
                    checked={gender}
                />
                </label>
                </div>
</div>  
<div className="column">         
            <label htmlFor="birthDate" className="label">
                <p>
                    Birth Date:
                    {/* {errors?.publishDate === '' && <span className='error'>*published at</span>} */}
                </p>
                <input type="date" value={birthDate} name="birthDate" onChange={(event)=>setBirthDate(event.target.value)}>
                </input>
            </label>
            <label htmlFor="deliveryDate" className="label">
                <p>
                    Delivery Date:
                    {/* {errors?.publishDate === '' && <span className='error'>*published at</span>} */}
                </p>
                <input type="date" value={deliveryDate} name="deliveryDate" onChange={(event)=>setDeliveryDate(event.target.value)}>
                </input>
            </label>
            <label htmlFor="zipCode" className="zipCode">
                <p>
                    Zip Code:
                    {/* {errors?.info === '' && <span className='error'>*info</span>} */}
                </p>
                <input type="text" value={zipCode} name="zipCode" onChange={(event)=>setZipCode(event.target.value)}>
                </input>
            </label>
            <label htmlFor = "country" className="label">
                <p>
                    Country:
                    {/* {errors?.address === '' && <span className='error'>*address</span>} */}
                </p>
                <select className ="select" name="country" value = "country" onChange = {(event)=>setCountry(event.target.value)}>
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
                    {/* {errors?.agree === '' && <span className='error'>*agree</span>} */}
                </p>
                <input type="checkbox" checked={coupon} name="coupon" onChange={()=>setCoupon(prev => !prev)}/>
            </label>
            <label htmlFor="samples" className="label">
                <p>
                    Samples:
                    {/* {errors?.agree === '' && <span className='error'>*agree</span>} */}
                </p>
                <input type="checkbox" checked={samples} name="samples" onChange={()=>setSamples(prev => !prev)}/>
            </label>
            <label htmlFor="pocket" className="label">
                <p>
                    Pocket:
                    {/* {errors?.agree === '' && <span className='error'>*agree</span>} */}
                </p>
                <input type="checkbox" checked={pocket} name="pocket" onChange={()=>setPocket(prev => !prev)}/>
            </label>
            </div>
            <label htmlFor="agree" className="label">
                <p>
                    Agree:
                    {/* {errors?.agree === '' && <span className='error'>*agree</span>} */}
                </p>
                <input type="checkbox" checked={agree} name="agree" onChange={()=>setAgree(prev => !prev)}/>
            </label>

            <div className="form-button">
                <input className ="button_submit" type="submit" value='send'/>
            </div>
</div>  
        </form>

    )
}