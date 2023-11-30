import { Injectable } from '@angular/core';
import { IPost } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  posts:IPost[] = [
    {
      id: 1,
      type: 'politic',
      title: 'assassin',
      content:'drvvvvvvvvvvvvvvvrrrrrrrrrrrrrrrrrrrrrr',
      active: false,
    },
    {
      id: 2,
      type: 'politic',
      title: 'assassin',
      content:'drvvvvvvvvvvvvvvvrrrrrrrrrrrrrrrrrrrrrr',
      active: false,
    },
    {
      id: 3,
      type: 'politic',
      title: 'assassin',
      content:'drvvvvvvvvvvvvvvvrrrrrrrrrrrrrrrrrrrrrr',
      active: false,
    }
  ];

  getAll(){
    return this.posts
  }

  getActivepPosts(){
    return this.posts.filter(p => p.active)
  }

  getInactivePosts(){
    return this.posts.filter(p => !p.active)

  }

  toggleActive(post:IPost){

    let index = this.posts.findIndex(p => p.id == post.id)
    post.active = !post.active;
    this.posts.splice(index,1,post)
  }

  toggleActiveMap(post:IPost){
    this.posts = this.posts.map( p => {
      if (p.id == post.id ) p.active = !p.active;
      return p
    })
  }

}
