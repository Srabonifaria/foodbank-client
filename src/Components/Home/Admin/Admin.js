import React from 'react';
import img from '../../../image/aliza.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Admin = () => {
    return (
        <div className="col-md-4 text-center">

            {/* {
            admin.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${admin.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://blooming-inlet-54142.herokuapp.com/${admin.img}`} alt=""/>
        } */}

            <img style={{height:'200px'}} className="img-fluid mb-3" src={img} alt=""/>
            <h4>Coudi</h4>
            {/* <h4>{admins.name}</h4> */}
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Admin;