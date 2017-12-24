interface Observer {
    updateSelf() : void
}

interface Observable {
    updateObservers() : void
    addObserver(observer: Observer) : void;
}

export {Observer, Observable}