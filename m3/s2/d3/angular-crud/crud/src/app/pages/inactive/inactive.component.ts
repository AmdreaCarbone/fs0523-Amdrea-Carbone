import { Component } from '@angular/core';
import { IPost } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.scss'
})
export class InactiveComponent {

  postArr:IPost[] = [];

  constructor(private postSvc:PostService){

  }

  ngOnInit(){
    this.updatePosts
  }

  updatePosts(){
    this.postArr = this.postSvc.getInactivePosts()
  }

  toggleStatus(post:IPost){
      this.postSvc.toggleActive(post)
      this.updatePosts()
    }
}
