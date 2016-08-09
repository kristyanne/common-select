'use strict';

(() => {
    class Select {
        constructor(select) {
            this.select = select;

            this.createUI();
            this.attachEvents();
        }

        createUI() {
            this.label = document.createElement('div');
            this.label.classList.add('js-label');

            this.select.parentNode.insertBefore(this.label, this.select.nextSibling);

            this.update();
        }

        update() {
            let i = this.select.selectedIndex;
            let value = this.select[i].text;

            this.label.innerHTML = value;
        }

        attachEvents() {
            this.select.addEventListener('change', this.update.bind(this));
        }
    }

    let els = document.getElementsByClassName('js-select');

    for(let i = 0; i <= els.length - 1; i++) {
        let s = new Select(els[i]);
    }
})();
