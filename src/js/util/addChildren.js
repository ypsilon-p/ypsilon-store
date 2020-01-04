import Component from "../component/component";

const addChildren = (element, children) => {
    children.map(child => {
        if (child instanceof Component) {
            element.appendChild(child.render());
            return true;
        }
        if (child instanceof HTMLElement) {
            element.appendChild(child);
            return true;
        }
        if (typeof child === "string") {
            const textNode = document.createTextNode(child);
            element.appendChild(textNode);
            return true;
        }
    });
    return element;
};

export default addChildren;
