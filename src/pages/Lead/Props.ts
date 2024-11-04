export type LeadProps = {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
  };
  
export type CategoryProps = {
    id: number;
    category: string;
};

export type JobProps = {
    id: number;
    createdIn: Date;
    description: string;
    suburb: string;
    price: number;
    accepted: number;
    jobCategory: CategoryProps;
    lead: LeadProps
}

export type CardProps = {
    job: JobProps; 
  }