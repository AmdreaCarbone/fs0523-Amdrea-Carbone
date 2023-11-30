import { IPost } from '../../Models/post';
import { PostService } from './../../post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {

  postArr:IPost[] = [];

  constructor(private postSvc:PostService){

  }

    ngOnInit(){
      this.updatePosts
    }

    updatePosts(){
      this.postArr = this.postSvc.getActivepPosts()
    }

    toggleStatus(post:IPost){
        this.postSvc.toggleActive(post)
        this.updatePosts()
      }


}
