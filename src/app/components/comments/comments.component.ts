import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
comments: IComment[]

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
  this.commentService.getAllComments().subscribe(value => this.comments = value)
  }

}
