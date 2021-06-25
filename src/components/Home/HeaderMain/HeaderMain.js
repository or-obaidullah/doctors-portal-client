import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main className="container-fluid">
            <div  style={{height:'600px'}} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{color:'#3a4256'}}>Your New Smile <br/> Start Here </h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, aperiam mollitia minima debitis hic eligendi.</p>
                    <button className="btn btn-primary">GET APPOINMENT</button>
                </div>
                <div className="col-md-6 ">
                    <img className="img-fluid" src={chair} alt="" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;