import React, { FormEvent} from "react";
import { useState } from "react"
import CardInterface from "../../interfaces/cardInterface";

export const Form = ({setFormValues}:{setFormValues: any}) => {
    const [address, setAddress] = useState('Russia'); //select
    const [imageUrl, setImageUrl] = useState(''); //file
    const [info, setInfo] = useState(''); //text
    const [publishDate, setPublishedDate] = useState('');//date
    const [like, setLike] = useState(false);//switcher
    const [agree, setAgree] = useState(false);//checkbox

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        (event as unknown as HTMLFormElement).preventDefault();
        console.log(address, imageUrl, info, publishDate, like, agree);
        setFormValues((state: []) => [...state, {address, imageUrl, info, publishDate, like, agree}]);
    }
    return(
        <form onSubmit = {handleSubmit} className = 'form' >
            <label htmlFor = "address" className="label">
                <p>
                    Address:
                    {/* {errors?.address === '' && <span className='error'>*address</span>} */}
                </p>
                <select className ="select" name="address" value = "address" onChange = {(event)=>setAddress(event.target.value)}>
                    <option>Russia</option>
                    <option>Belarus</option>
                    <option>Ukraine</option>
                    </select>
            </label>
            <label htmlFor="imageUrl" className="label">
                <p>
                    Photo:
                    {/* {errors?.imageUrl === '' && <span className='error'>*photo</span>} */}
                </p>
                <input type="file" value={imageUrl} name="imageUrl" onChange={(event)=>setImageUrl(event.target.value)}>
                </input>
            </label>
            <label htmlFor="info" className="label">
                <p>
                    Info:
                    {/* {errors?.info === '' && <span className='error'>*info</span>} */}
                </p>
                <input type="text" value={info} name="info" onChange={(event)=>setInfo(event.target.value)}>
                </input>
            </label>
            <label htmlFor="publishDate" className="label">
                <p>
                    Published at:
                    {/* {errors?.publishDate === '' && <span className='error'>*published at</span>} */}
                </p>
                <input type="date" value={publishDate} name="info" onChange={(event)=>setPublishedDate(event.target.value)}>
                </input>
            </label>
            <label htmlFor="agree" className="label">
                <p>
                    Agree:
                    {/* {errors?.agree === '' && <span className='error'>*agree</span>} */}
                </p>
                <input type="checkbox" checked={agree} name="agree" onChange={()=>setAgree(prev => !prev)}/>
            </label>
            <label htmlFor="like" className="label">
                <p>
                    Like:
                    {/* {errors?.like === '' && <span className='error'>*like</span>} */}
                </p>
                <input type="checkbox" checked={like} name="agree" onChange={()=>setLike(prev => !prev)}/>
            </label>
            <div className ="button_submit">
                <input type="submit" value='send'/>
            </div>
        </form>

    )
}