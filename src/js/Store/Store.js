class Store {
    constructor(namespace, version) {
        this.namespace = namespace;
        this.version = version;
        this.store = {};
        this.actions = {};
        this.mutations = {};
    }
}
