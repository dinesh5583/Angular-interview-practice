import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";
@Directive({
    selector:'[appCustomDir]',
    standalone:true
})
export class customDirective{
    @Input('defaultColor') defaultColor: any;
    @HostBinding('innerText') bgColor:any;
    constructor(private render:Renderer2,private el:ElementRef){}
    ngOnInit(){
        this.bgColor=this.defaultColor;
        // this.render.setProperty(this.el.nativeElement,'innerText','Dinesh Mehra');
        // this.render.setStyle(this.el.nativeElement,'color','red');
        // this.render.setStyle(this.el.nativeElement,'background-color','violet')
    }
    @HostListener('mouseenter') onMouseEnter(){
        this.render.setStyle(this.el.nativeElement,'color','red');
        this.render.setStyle(this.el.nativeElement,'background-color','transparent') 
    }
}