import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';


const AddServices = () => {

    const { register, handleSubmit } = useForm();
   const [imageURL,setImageURL] = useState(null)


    const onSubmit = data => {
      const serviceData ={
        name:data.name,
        imageURL:imageURL
      }
      const url = `https://blooming-inlet-54142.herokuapp.com/addService`;
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
    .then(res => console.log('server side response', res))
  };

    const handleImageUpload = (location) => {
        console.log(location.target.files[0])
        const imageData = new FormData()
        imageData.set('key','64dc9f0fb998de0a45bd77ce67abdcdc')
        imageData.append('image',location.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData
        )
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="row container">
            <Navbar></Navbar>
       <div className="col-md-6 justify-content-center">
     
     
           </div> 
           <div className="col-md-6">
                 <h2>Add New Services Here</h2>
     <form onSubmit={handleSubmit(onSubmit)}>
    
    <input name="name" defaultValue="New exciting Service" ref={register} />
    <br/>
    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
    <br/>
    <input type="submit" />
  </form>
           </div>
        </div>
    );
};

export default AddServices;