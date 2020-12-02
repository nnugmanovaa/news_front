import {Component, OnInit} from '@angular/core';
import {CommentServiceService} from './service/comment-service.service';
import {Comment} from './model/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service: CommentServiceService) {}
  title = 'news-app';
  shouldShow = false;
  comment: string;
  comments: Comment[] = [];

  ngOnInit(): void {
    this.service.getAll().subscribe(perf => {
      this.comments = perf;
    }, err => {
      console.log(err);
    });
  }
  show() {
    if (!this.shouldShow) {
      this.shouldShow = true;
    } else {
      this.shouldShow = false;
    }
  }

  sendData() {
    this.service.add(this.comment).subscribe(perf => {
      console.log('Thank you, for using VN!');
      window.location.reload();
    });
  }
}
