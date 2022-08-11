export class HotNews{
    public header: string;
    public  description: string;
    public image: string;
    public date: string;
    public type: string
    constructor(header: string, description: string, image: string, date: string, type: string){
        this.header = header;
        this.description = description;
        this.image = image;
        this.date = date;
        this.type = type;
    }
}