import { Skill } from "./skill.model";

export class Article{
    constructor(
        public id: string,
        public type: string,
        public date: string,
        public image: {thumbnail: string, portrait: string},
        public header: string,
        public source: string,
        public videoRef: string,
        public description: string,        
        public skill: Skill[]
    ){
        this.id = id;
        this.type = type;
        this.date = date;
        this.image = image;
        this.header = header;
        this.source = source;
        this.description = description;
        this.skill = skill;    
    }
}