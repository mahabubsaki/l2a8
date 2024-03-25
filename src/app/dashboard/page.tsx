import { redirect } from 'next/navigation';
import React from 'react';

const Dashboard = () => {
    redirect('/dashboard/all-products');
    return <></>;
};

export default Dashboard;