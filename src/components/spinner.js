import React from 'react';
import Loading from './loading.gif';


class spinner extends React.Component {

    render() {
        return (
            <div className='text-center' style={{zIndex:5}}>
                <img src={Loading} alt="loading" />
            </div>
        )
    }
}

export default spinner;