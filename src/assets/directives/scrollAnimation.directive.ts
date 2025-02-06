import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective implements OnInit {
  @Input() animationClass = ''; // Animation class name
  @Input() animationDelay = '0s'; // Delay before animation starts
  @HostBinding('style.animationDelay') delay!: string;
  @HostBinding('class') elementClass = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.visibility = 'hidden';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.style.visibility = 'visible';
            this.elementClass = this.animationClass;
            this.delay = this.animationDelay;
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(this.el.nativeElement);
  }
}
