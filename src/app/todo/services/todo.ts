
export class Todo {
    constructor(public _id: string,
                public text: string,
                public description: string,
                public done: boolean) {}

    static get Empty() {
        return new Todo("", "", "", false);
    }
}