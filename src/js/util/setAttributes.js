const setAttributes = (element = HTMLElement, attributes) => {
    var attributes_names = Object.keys(attributes);
    attributes_names.map(name => {
        element.setAttribute(name , attributes[name]);
    });
    return element;
};

export default setAttributes;
