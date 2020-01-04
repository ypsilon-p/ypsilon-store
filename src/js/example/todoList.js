import Component from "../component/component";
import listItem from "./listItem";
import createElement from "../util/createElement";
import store from "./store";

export default class todoList extends Component {

    /**
     *
      * @param props
     * @param context
     */
    constructor(props, context = {}) {
        super(props, context);
        this.props = props;
        this.context = context;
        store.addListener("CHANGE_TODOS", (value) => {
            this.setContext("items", value);
        });
    }

    /**
     * This function renders the current items array into listItems. This is a basic workflow which you can use only
     * with static items. If the items contains dynamic attributes you have to define them in your store and render the
     * items with it self listeners.
     * @returns {[]|listItem[]}
     */
    renderItems() {
        const items = [];
        if (!this.context.items.length) {
            return [new listItem(({id: 0 , label: "Yeah, nothing todo at this moment!" , clickable: false}))];
        }
        this.context.items.map(item => {
            items.push(new listItem({id: item.id, label: item.label}));
        });
        return items;
    }

    render() {
        return createElement("ul", {"class": "todo-list", "data-ref": this.ref}, [...this.renderItems()]);
    }

}
