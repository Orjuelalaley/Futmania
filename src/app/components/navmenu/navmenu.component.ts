
import { Component,HostListener, Renderer2,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/servicios/auth.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  ngOnInit(): void {
  }
  img = './assets/images/logo.png';
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(private renderer: Renderer2, private router:Router, private authService: AuthService) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scroll = document.documentElement.scrollTop;
    const header = document.querySelector('header');

    if (scroll > 10) {
      this.renderer.addClass(header, 'header__active');
    } else {
      this.renderer.removeClass(header, 'header__active');
    }
  }
  navegar(web_page : string ):void {
    this.router.navigate([web_page]);
  }
  LogOut():void{
    this.authService.logout();
    this.router.navigate(['auth/registro']);
  }

}
