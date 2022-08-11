export class Article{
    constructor(
        public id: string,
        public type: string,
        public date: string,
        public image: {thumbnail: string, portrait: string},
        public header: string,
        public source: string,
        public description: string,
    ){
        this.id = id;
        this.type = type;
        this.date = date;
        this.image = image;
        this.header = header;
        this.source = source;
        this.description = description;        
    }
}