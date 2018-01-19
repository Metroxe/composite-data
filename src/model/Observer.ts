interface IObserver {
    updateSelf(newValue?: any): void;
}

interface IObservable {
    updateObservers(): void;
    addObserver(observer: IObserver): void;
}

export {IObserver, IObservable};
