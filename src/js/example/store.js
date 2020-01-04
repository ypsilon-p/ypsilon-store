import Store from "../store/store";

class todoStore extends Store {
    constructor(namespace, version, store, useLocalStorage = true) {
        super(namespace, version, store, useLocalStorage);
        this.mutations = {
            "CHANGE_TODOS": (value) => {
                this.store["items"] = value;
                return this.store["items"];
            },
        };
        this.listener = {
            "CHANGE_TODOS": [],
        };
    }
}

const store = new todoStore("todo", "001", {
    items: []
});
export default store;
