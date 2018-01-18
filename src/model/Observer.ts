interface Observer {
    updateSelf(newValue? : any) : void
}

interface Observable {
    updateObservers() : void;
    addObserver(observer: Observer) : void;
}

export {Observer, Observable}