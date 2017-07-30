export class Player {
    id: string;
    name: string;
    rating: string;
    lastPlayedTime: Date;

    constructor(obj?: any) {
        this.id = obj.id;
        this.name = obj.name;
        this.rating = obj.rating;
        this.lastPlayedTime = obj.lastPlayedTime;
    }
}