export function on(element, action, callback) {
  element.addEventListener(action, callback);
}

export default {
  on
};
