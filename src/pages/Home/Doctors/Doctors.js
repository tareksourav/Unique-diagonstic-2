import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    console.log(doctors);
    return (
        <div>
            <h2>This is doctors</h2>

            <div className='d-flex justify-content-center py-3'>
                <h2>This is doctors</h2>
            </div>
            <div className='row justify-content-center'>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;