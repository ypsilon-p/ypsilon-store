import Component from "../component/component";
import store from "./store";
import createElement from "../util/createElement";

class todoForm extends Component {
    constructor(props, context) {
        super(props, context);
    }

    addItem(e) {
        const item = e.target.querySelector("input").value;
        let items = store.getValue("items");
        const new_items = [];
        items = [...items, {id: items.length, label: item}];
        store.runMutation("CHANGE_TODOS", items);
       e.target.querySelector("input").value = '';
    }

    render() {
        const input = createElement("input", {"type": "text", "placeholder": "Type Todo and press enter"});
        const element = createElement("form", {"id": "todoForm"}, [input]);
        element.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addItem(e);
        });
        return element;
    }
}

const form = new todoForm({}, {});

export default form;
