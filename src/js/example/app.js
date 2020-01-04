import Component from "../component/component";
import createElement from "../util/createElement";
import store from "./store";
import todoList from "./todoList";
import form from "./form";
import toast from "./toast";

export default class app extends Component {
    constructor(props, context = {}) {
        super(props, context);

    }

    render() {
        const toaster = new toast({}, {});
        return createElement("div", {"id": "app", "data-ref": this.ref}, [new todoList({}, {
            "items": store.getValue("items")
        }), form, toaster]);
    }

}
