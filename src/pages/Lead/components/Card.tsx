import React from 'react';
import './Card.css';

import { CardProps } from '../Props'; 

const Card: React.FC<CardProps> = ({ job }) => {
  return (
    <div className="card">
      <div className='icon'>
        {job.lead.name.charAt(0)}
      </div>
      <p>{job.description}</p> 
      <p>Category: {job.jobCategory.category}</p> 
      <p>Price: ${job.price.toFixed(2)}</p>
      <p>Accepted: {job.accepted ? 'Yes' : 'No'}</p> 
    </div>
  );
};

export default Card;
