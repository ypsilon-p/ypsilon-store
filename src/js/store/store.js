export default class Store {

    /**
     * The constructor of the store. It use a namespace und version to keep a compatibility with older version.
     *
     * @param namespace
     * @param version
     * @param store
     * @param useLocalStorage
     */
    constructor(namespace, version, store, useLocalStorage = true) {
        this.namespace = namespace + "_" + version;
        this.listener;
        this.mutations;
        this.store = this.setStore(store, useLocalStorage) ? JSON.parse(localStorage.getItem(this.namespace)) : store;
    }

    updateLocalStorage() {
        localStorage.setItem(this.namespace, JSON.stringify(this.store));
    }

    /**
     * The function to check if the application needs to use the localstorage as the beginning point and also checks if
     * the localstorage is set.
     * @param store
     * @param useLocalStorage
     * @returns {boolean}
     */
    setStore(store, useLocalStorage) {
        if (useLocalStorage) {
            return localStorage.getItem(this.namespace);
        } else {
            return false;
        }
    }

    /**
     *
     * @param mutation
     * @param value
     */
    runListener(mutation, value) {
        if (this.listener.hasOwnProperty(mutation)) {
            this.listener[mutation].forEach((callback) => {
                if (typeof callback === "function") {
                    callback(value);
                    return true;
                } else {
                    return false;
                }
            });
        }
    }

    /**
     *
     * @param mutation
     * @param callback
     */
    addCallbackToMutation(mutation, callback) {
        this.listener[mutation] = [...this.listener[mutation], callback];
    }


    /**
     *
     * @param mutation
     * @param callback
     */
    addListener(mutation, callback) {
        this.addCallbackToMutation(mutation, callback);
    }

    /**
     *
     * @param mutation
     * @param value
     * @returns {boolean}
     */
    runMutation(mutation, value) {
        if (this.mutations.hasOwnProperty(mutation)) {
            const run = this.mutations[mutation];
            if (typeof run === "function") {
                run(value);
                this.updateLocalStorage();
                return this.runListener(mutation, value);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    getValue(key) {
        return this.store[key];
    }


}
