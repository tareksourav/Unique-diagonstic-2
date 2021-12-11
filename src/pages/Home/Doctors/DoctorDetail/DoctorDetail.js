import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    console.log(doctorId);
    return (
        <div>
            <h1>Doctor Detail</h1>
        </div>
    );
};

export default DoctorDetail;