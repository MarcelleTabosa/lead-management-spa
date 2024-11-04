import React, { useEffect, useState } from 'react';
import './Lead.css';
import { JobProps } from './Props';
import { getJobs } from '../../services/jobService';
import Card from './components/Card';

const Lead: React.FC = () => {

  const [jobs, setJobs] = useState<JobProps[]>([]); 
  const [loading, setLoading] = useState(true); 
  const [selectedTab, setSelectedTab] = useState<'accepted' | 'notAccepted'>('notAccepted');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data); 
      } catch (error) {
        console.error('An error occurred while fetching lead data', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchJobs(); 
  }, []);

  const filteredJobs = selectedTab === 'accepted'
    ? jobs.filter(job => job.accepted == 1)
    : jobs.filter(job => job.accepted == 0);

  const updateJobStatus = (updatedJob: JobProps) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  return (
    <div className="lead">
            
      <nav className="tab-navigation">
        <button onClick={() => setSelectedTab('notAccepted')} className={selectedTab === 'notAccepted' ? 'active' : ''}>
          Invited
        </button>
        <button onClick={() => setSelectedTab('accepted')} className={selectedTab === 'accepted' ? 'active' : ''}>
          Accepted
        </button>
      </nav>

      <section className="lead-content">
        <div className="job-list">
          {filteredJobs.map(job => (
            <div className="job-card">
              <Card job={job} onJobUpdate={updateJobStatus}></Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lead;
