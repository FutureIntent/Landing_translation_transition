export enum IVacancyCategory {
    coding = 'coding',
    design = 'design',
    marketing = "marketing",
    other = "other",
}

export interface IJobDetails {
    experience: string;
    requiredSkills: string[];
    languages: string[];
    responsibilities: string[];
    benefits: string[];
    additionalInfo: string;
}

export interface IVacancy {
    category: IVacancyCategory;
    title: string;
    description: string;
    workFrom: {
        inHouse: boolean;
        remote: boolean;
    };
    jobDetails: IJobDetails;
}
