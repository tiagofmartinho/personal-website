export class Certification {
    imageUrl: string;
    badgeUrl: string;
    name: string;
    company: string;
    date: string;

    constructor(imageUrl, badgeUrl, name, company, date) {
        this.imageUrl = imageUrl;
        this.badgeUrl = badgeUrl;
        this.name = name;
        this.company = company;
        this.date = date;
    }
}