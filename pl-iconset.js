import { PlElement, html } from "polylib";

class PlIconset extends PlElement {
    constructor() {
        super();
        document.iconMap = document.iconMap || {};
    }

    static get properties() {
        return {
            iconset: { type: String }
        }
    }

    static get template() {
        return html`
            <slot on-slotchange="[[onSlotChange]]"></slot>
        `
    }

    onSlotChange() {
        const [svg] = this.root.querySelector('slot').assignedNodes().filter(node => node.nodeType !== Node.TEXT_NODE);
        const icons = svg.querySelectorAll('g');
        if (!icons.length) return false;
        document.iconMap[this.iconset] = icons;
    }
}

customElements.define('pl-iconset', PlIconset);