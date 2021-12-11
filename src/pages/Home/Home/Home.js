import React from 'react';
import SubHeading from '../../../Shared/SubHeading/SubHeading';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubHeading></SubHeading>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;