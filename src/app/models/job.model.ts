export class Job {
    imageUrl: string;
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    description; string;

    constructor(imageUrl, role, company, startDate, endDate, description) {
        this.imageUrl = imageUrl;
        this.role = role;
        this.company = company;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }
}