import React from 'react';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Brokerage from './Brokerage';
import TableCharges from './TableCharges';

function PricingPage() {
    return (
        <>
        <Hero/>
        <TableCharges/>
        <Brokerage/>
        </>
    );
}

export default PricingPage;