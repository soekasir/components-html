var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Component_classNode, _Component_contextNode, _Component_contextMap, _Component_element, _Component_class, _Component_state, _Component_json;
class Component {
    constructor(el, props) {
        var _b, _c;
        _Component_element.set(this, void 0);
        _Component_class.set(this, void 0);
        _Component_state.set(this, {});
        this.props = {};
        _Component_json.set(this, void 0);
        console.log(props);
        __classPrivateFieldSet(this, _Component_element, document.querySelectorAll(`[component="${el}"]`), "f");
        __classPrivateFieldSet(_b = Component, _a, (_c = __classPrivateFieldGet(_b, _a, "f", _Component_classNode), _c++, _c), "f", _Component_classNode);
        __classPrivateFieldSet(this, _Component_class, 'ComponentNode_' + __classPrivateFieldGet(Component, _a, "f", _Component_classNode), "f");
        document[__classPrivateFieldGet(this, _Component_class, "f")] = this;
        __classPrivateFieldSet(this, _Component_json, props, "f");
        if (props)
            this.props = JSON.parse(props);
        this.componentDidMount();
        this._reRender();
    }
    _reRender() {
        __classPrivateFieldGet(this, _Component_element, "f").forEach((element) => {
            if (__classPrivateFieldGet(this, _Component_json, "f") === undefined) {
                element.innerHTML = this.render();
            }
            else if (__classPrivateFieldGet(this, _Component_json, "f") === element.getAttribute('props')) {
                element.innerHTML = this.render();
            }
        });
    }
    setState(newState) {
        __classPrivateFieldSet(this, _Component_state, Object.assign(Object.assign({}, __classPrivateFieldGet(this, _Component_state, "f")), newState), "f");
        this._reRender();
    }
    set state(newState) {
        __classPrivateFieldSet(this, _Component_state, newState, "f");
        this._reRender();
    }
    get state() {
        return __classPrivateFieldGet(this, _Component_state, "f");
    }
    get class() {
        return __classPrivateFieldGet(this, _Component_class, "f");
    }
    componentDidMount() { }
    render() {
        return /*html*/ `<div></div>`;
    }
    static run() {
        const components = document.querySelectorAll('[component]');
        components.forEach((component) => {
            const className = component.getAttribute('component');
            const props = component.getAttribute('props');
            try {
                eval('new ' + className + '("' + className + '",`' + props + '`);');
            }
            catch (error) {
                console.error(error.message);
                alert('Error: ' + error.message);
            }
        });
    }
    static createContext(initialData) {
        var _b, _c;
        __classPrivateFieldSet(_b = Component, _a, (_c = __classPrivateFieldGet(_b, _a, "f", _Component_contextNode), _c++, _c), "f", _Component_contextNode);
        const node = 'ContextNode_' + __classPrivateFieldGet(Component, _a, "f", _Component_contextNode);
        __classPrivateFieldGet(Component, _a, "f", _Component_contextMap).set(node, initialData);
        const getter = () => __classPrivateFieldGet(Component, _a, "f", _Component_contextMap).get(node), setter = (newValue) => __classPrivateFieldGet(Component, _a, "f", _Component_contextMap).set(node, newValue);
        return [getter, setter, node];
    }
}
_a = Component, _Component_element = new WeakMap(), _Component_class = new WeakMap(), _Component_state = new WeakMap(), _Component_json = new WeakMap();
_Component_classNode = { value: 0 };
_Component_contextNode = { value: 0 };
_Component_contextMap = { value: new Map() };
export {};