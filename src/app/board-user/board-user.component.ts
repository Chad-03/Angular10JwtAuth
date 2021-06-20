import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content : string;

  constructor(private userServer : UserService) { }

  ngOnInit(): void {
      this.userServer.getUserBoard().subscribe(
          date => {

            this.content = date;
          },
         err => {

          this.content = JSON.parse(err.error).message;

          
         }

      );
  }

}