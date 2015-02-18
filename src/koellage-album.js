(function () {

let {ownerDocument} = document.currentScript;

class KoellageAlbum extends HTMLElement {

    constructor() {
        //currently not called from registerElement -> wait
        // -> https://w3c.github.io/webcomponents/spec/custom/#dfn-custom-element-constructor-generation
    }

    createdCallback() {
        let template = ownerDocument.querySelector('#koellage-album');
        this.createShadowRoot().appendChild(document.importNode(template.content, true));
        this.render()
    };

    render() {
        this.setTitle(this.getAttribute('title'));
    }

    setTitle(title) {
        this.shadowRoot.querySelector('section h2').textContent = title;
    }

}

document.registerElement('koellage-album', KoellageAlbum);

})();
