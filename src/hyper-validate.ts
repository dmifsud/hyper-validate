export const applyHyperValidate = (content: HTMLElement) => {
        const keysNotToSync = ['Enter', 'Tab', 'Shift', 'Control', 'Alt', 'Meta', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

        content.querySelectorAll('input[hv-invalid-target]').forEach((input) => {

            const syncUIValidity = function(this: HTMLInputElement, event: Event) {
                if (event instanceof KeyboardEvent) {
                    if (keysNotToSync.includes(event.key)) {
                        return;
                    }
                }
                const target = this.getAttribute('hv-invalid-target') ?? '';
                const targetElement = content.querySelector(target);
                if (targetElement) {
                    if (this.validity.valid) {
                        targetElement.innerHTML = '';
                        } else {
                            event.preventDefault();
                            targetElement.innerHTML = this.validationMessage;
                    }
                }
            }


    
            const additionalEvents = input.getAttribute('hv-invalid-events')?.split(' ') ?? [];
    
            input.addEventListener('invalid', syncUIValidity);
    
            additionalEvents.forEach(event => {
                input.addEventListener(event, syncUIValidity);
            });
    
        });
    
        content.querySelectorAll('input[hv-invalid-class]').forEach(input => {

            const syncUIValidity = function(this: HTMLInputElement, event: Event) {
                if (event instanceof KeyboardEvent) {
                    if (keysNotToSync.includes(event.key)) {
                        return;
                    }
                }
                const className = this.getAttribute('hv-invalid-class');
                if (typeof className === 'string') {
                    if (this.validity.valid) {
                        className.split(' ').forEach(c => this.classList.remove(c));
                    } else {
                        event.preventDefault();
                        className.split(' ').forEach(c => this.classList.add(c));
                    }
                }
    
            };
    
            const additionalEvents = input.getAttribute('hv-invalid-events')?.split(' ') ?? [];
            input.addEventListener('invalid', syncUIValidity);
    
    
            additionalEvents.forEach(event => {
                input.addEventListener(event, syncUIValidity);
            });
        });
        
    };