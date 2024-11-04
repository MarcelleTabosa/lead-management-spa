import React from 'react';
import './Card.css';
import { CardProps } from '../Props'; 
import { format } from 'date-fns';
import location from '../../../assets/location.svg'; 
import bag from '../../../assets/bag.svg'; 
import phone from '../../../assets/phone.svg'; 
import email from '../../../assets/email.svg'; 
import { updateJob } from '../../../services/jobService';

interface CardComponentProps extends CardProps {
  onJobUpdate: (updatedJob: CardProps['job']) => void;
}

const Card: React.FC<CardComponentProps> = ({ job, onJobUpdate }) => {
  

  const formatteDate = (date: Date) => format(date, "MMMM d '@' h:mm a");

  const handleUpdate = async (status: number) => {
    try {
      job.accepted = status;
      await updateJob(job);
      
      onJobUpdate(job);
    } catch (error) {
      console.error('Failed to update job:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className='div-icon'>
          {job.lead.name.charAt(0)}
        </div>
        <div className="card-header-data">
          <div className="card-name">{job.lead.name}</div>
          <div className="card-date">{formatteDate(job.createdIn)}</div>
        </div>
      </div>
      {job.accepted == 0 ? (
        <div>
          <div className="card-section">
            <img src={location} />
            <span> {job.suburb} </span>
            <img src={bag} />
            <span> {job.jobCategory.category} </span>
            <span>Job ID: {job.id} </span>
          </div>
          <div className="card-section">
            <span>{job.description}</span> 
          </div>
          <div className="card-button">
            <button 
              className="card-button-accepted"
              onClick={() => handleUpdate(1)}>Accepted</button>
            <button 
              className="card-button-decline"
              onClick={() => handleUpdate(2)}>Decline</button>
            <span>${job.price.toFixed(2)} Lead Invitation</span>
          </div>
      </div>
      ) : (
      <div>
        <div className="card-section">
            <img src={location} />
            <span> {job.suburb} </span>
            <img src={bag} />
            <span> {job.jobCategory.category} </span>
            <span>Job ID: {job.id} </span>
            <span>${job.price.toFixed(2)} Lead Invitation</span>
          </div>
          <div className="card-accepted-section">
            <img src={phone} />
            <span> {job.lead.phoneNumber} </span>
            <img src={email} />
            <span> {job.lead.email} </span>
          </div>
          <div className="card-accepted">
            <span>{job.description}</span> 
          </div>
      </div>)}
      
    </div>
  );
};

export default Card;
