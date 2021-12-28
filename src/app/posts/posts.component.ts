import { Component, OnInit } from '@angular/core'
import { Post } from '../models/post.model'

@Component({
    selector: 'hp-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
    //For now those are only examples PoC
    posts: Post[] = [
        {
            title: 'Example title',
            content: 'Example content',
            tags: ['computer', 'science'],
        },
        {
            title: 'Example title',
            content: 'Example content',
            tags: ['computer', 'science'],
        },
        {
            title: 'Example title',
            content: 'Example content',
            tags: ['computer', 'science'],
        },
        {
            title: 'Example title',
            content: 'Example content',
            tags: ['computer', 'science'],
        },
    ]

    constructor() {}

    ngOnInit(): void {}
}
