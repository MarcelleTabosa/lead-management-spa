export type LeadProps = {
    name: string;
    phoneNumer: string;
    email: string;
  };
  
export type CategoryProps = {
    category: string;
};

export type JobProps = {
    description: string;
    suburb: string;
    price: number;
    accepted: boolean;
    jobCategory: CategoryProps;
    lead: LeadProps
}

export type CardProps = {
    job: JobProps; 
  }