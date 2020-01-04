import Component from "../component/component";
import createElement from "../util/createElement";
import store from "./store";

export default class listItem extends Component {
    constructor(props, context = {}) {
        super(props, context);
        this.props = props;
        this.context = context;
        props.hasOwnProperty("clickable") ? this.context.clickable = props.clickable : this.context.clickable = true;
    }

    delete() {
        const items = store.getValue("items");
        const new_items = [];
        items.map(item => {
            if (item.id !== this.props.id) {
                new_items.push(item);
            }
        });
        store.runMutation("CHANGE_TODOS", new_items);
    }

    render() {
        const close = createElement("span", {"class": "close"});
        close.addEventListener("click", () => {
            this.delete();
        });
        return createElement("li", {
            "class": "list-item",
            "data-ref": this.ref
        }, [this.props.label, this.context.clickable ? close : ""]);
    }

}
