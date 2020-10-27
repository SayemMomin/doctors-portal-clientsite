import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import FeaturedService from '../FeaturedService/FeaturedService';
import Contact from '../Contact/Contact';
import Footer from '../../Shared//Footer/Footer';

const Home = () => {
    return (
        <div className="container">
            <Header></Header>
            <Service></Service>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;