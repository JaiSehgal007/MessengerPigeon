import React from 'react';
import Loading from './loading.gif';


const spinner=()=> {
        return (
            <div className='text-center my-5' style={{zIndex:5}}>
                <img src={Loading} alt="loading" />
            </div>
        )
}

export default spinner;