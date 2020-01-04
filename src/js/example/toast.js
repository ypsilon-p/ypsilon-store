import Component from "../component/component";
import store from "./store";
import createElement from "../util/createElement";

export default class toast extends Component {
    constructor(props, context) {
        super(props, context);
        this.context = {
            "todoLength": store.getValue("items").length,
            "message": "Let's go!"
        };
        store.addListener("CHANGE_TODOS", (value) => {
            this.onToDoChange(value.length);
        });
    }

    onToDoChange(todoLength) {
        if (todoLength < this.context.todoLength) {
            this.setContext("todoLength" , todoLength);
            this.setContext("message" , "🎉 Yeah, you finished one todo!");
        }
        if (todoLength > this.context.todoLength) {
            this.setContext("todoLength" ,todoLength);
            this.setContext("message" , "😔 Sorry, That will probably what later today");
        }
        if (todoLength === 0) {
            this.setContext("todoLength" ,todoLength);
            this.setContext("message" , "🍻 Yeah, end of work!");
        }
    }

    render() {
        return createElement("div", {"class": "toast" , "data-ref": this.ref}, [this.context.message]);
    }

}
