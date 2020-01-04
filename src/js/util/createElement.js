import setAttributes from "./setAttributes";
import addChildren from "./addChildren";

/**
 *
 * @param tagname
 * @param attributes
 * @param children
 */
const createElement = (tagname, attributes, children = []) => {

    const element = setAttributes(document.createElement(tagname), attributes);

    return addChildren(element, children);

};


export default createElement;
