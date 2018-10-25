import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirectives {
    // constructor(private elRef: ElementRef, private renderer: Renderer2){ }
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(eventData: Event) {
        // this.renderer.setProperty(this.elRef.nativeElement, 'open', true);
        this.isOpen = !this.isOpen;
    };
}
