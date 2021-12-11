import React from 'react';
import pageNotFoundImg from '../../images/404.png';


const PageNotFound = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img src={pageNotFoundImg} alt="" />
        </div>
    );
};

export default PageNotFound;