export class Diary {
    public showDescription: boolean;
    constructor(public id : number, public text: string, public description: Date){
        this.showDescription = false;
    }

}
