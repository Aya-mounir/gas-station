import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    salonName: string='ppink';
    siteName: any = 'بينك'; // Initialize with a default name
    salonImage: any = './../assets/images/gas-station-favicon.svg'
  constructor(private meta: Meta, private title: Title){}
  updateTitle(title: string = 'Pink') {
    if (title) {
        this.title.setTitle(title);
    }
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  // var link:HTMLLinkElement = document.querySelector('link[rel="icon"]');
  this.updateTitle('i,,,i,i')
  this.meta.addTag({ name: 'description', content: 'بينك سيستم لخدمات التجميل و السبا' });
  this.meta.updateTag({ name: 'description', content: 'بينك سيستم لخدمات التجميل و السبا' });
  // link.href = `./../apple-touch-icon.png`;
}
}
