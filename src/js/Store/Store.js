class Store {
    constructor(namespace, version, store = {}, actions = {}, mutations = {}, useLocalStorage = true) {
        this.namespace = namespace + "_" + version;
        this.actions = actions;
        this.mutations = mutations;
        this.store = this.setStore(store, useLocalStorage) ? localStorage(this.namespace) : store;
    }

    setStore(store, useLocalStorage) {
        if (useLocalStorage) {
            return localStorage(this.namespace);
        } else {
            return false;
        }
    }
    
    runMutation(mutation, key, value) {
        if (this.mutations.hasOwnProperty(key) && this.mutations[key].hasOwnProperty(mutation)) {
            const run = this.mutations[key][mutation];
            if (typeof run === "function") {
                run(value);
                this.runActions(mutation, key, value);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    runActions(mutation, key, value) {

    }

}
