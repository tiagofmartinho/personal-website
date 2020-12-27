export class Degree {
    imageUrl: string;
    university: string;
    name: string;
    startDate: string;
    endDate: string;
    description: string;

    constructor(imageUrl, university, name, startDate, endDate, description){
        this.imageUrl = imageUrl;
        this.university = university;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }
}