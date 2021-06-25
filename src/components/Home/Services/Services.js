import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color:'#5fc7c7'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center container-fluid">
                <div className="row w-75 mt-5 pt-5">
                    {
                        servicesData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;