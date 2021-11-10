import React from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>this is from order place {id}</h2>
        </div>
    );
};

export default PlaceOrder;