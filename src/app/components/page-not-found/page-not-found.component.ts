import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})

export class PageNotFoundComponent implements OnInit {
  constructor(private router:Router, private cookieService:CookieService) { }
  ngOnInit(): void {
  }
  navegar(web_page : String ):void {
    if(this.cookieService.get('token') == null){
      this.router.navigate(['/auth/registro']);
    }else{
      this.router.navigate([web_page]);
    }
  }
}
