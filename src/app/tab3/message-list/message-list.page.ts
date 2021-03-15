import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.page.html',
  styleUrls: ['./message-list.page.scss'],
})
export class MessageListPage implements OnInit {

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;  
  messages: any[] = Array(15);

  users: Observable<any>;

  constructor(private DataService: DataService) { }

  ngOnInit() {

    this.users = this.DataService.getMessages();
    console.log(this.users);
  }

  loadData( event ){

    setTimeout(() => {
        if (this.messages.length >= 30) {
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = true;
            return;
        }  

        var moreMessages: any[] = Array(15);
        
        this.messages.push(...moreMessages);
        this.infiniteScroll.complete();
    }, 2000)
  }
  
}
