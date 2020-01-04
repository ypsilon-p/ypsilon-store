import generateRef from "../util/generateRef";

export default class Component {

    init() {
        this.mount();
        this.beforeRender();
    }

    beforeRender() {

    }

    mount() {

    }

    render() {

    }

    afterRender() {

    }

    update() {
        const current = document.querySelector("[data-ref='" + this.ref + "']");
        current.parentNode.replaceChild(this.render(), current);
    }

    constructor(props = {}, context = {}) {

        this.props = props;
        this.context = context;
        this.ref = generateRef();
        this.init();
    }

    setContext(key, value, callback = false) {
        if (!callback) {
            if (this.context.hasOwnProperty(key)) {
                this.context[key] = value;
                this.update();
            }
            return true;
        }
        callback(key, value, this.context);
        this.update();
        return true;
    }

}
