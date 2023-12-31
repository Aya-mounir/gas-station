import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-universal';

  constructor(private metaService:Meta){
    this.addTag();
  }

  addTag(){
    this.metaService.addTags([
      { name: 'description',
        content: 'Article Description'
      },
      { name: 'robots', content: 'index,follow' },
      { name: 'title', content: 'Content Title' }
   ]);
  }
}
