import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  content : string;

  constructor(private userServer : UserService) { }

  ngOnInit(): void {
    this.userServer.getModeratorBoard().subscribe(
      date => {

        this.content = date;
      },
     err => {

      this.content = JSON.parse(err.error).message;
  }
    );
  }
}
  
