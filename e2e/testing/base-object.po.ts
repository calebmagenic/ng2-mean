
export class BaseObject<TParent extends BaseObject<TParent>> {
    constructor(private parent: Function | TParent) {
    }

    getType(t?: any): string {
        if(t) {
            return (typeof t).toLowerCase();
        } else {
            return (typeof this.parent).toLowerCase();
        }
    }

    getAs<T>(t?: any): T {
        return t ? t as T : null;
    }
}