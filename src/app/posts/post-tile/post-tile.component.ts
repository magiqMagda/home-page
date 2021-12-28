import { Component, Input, OnInit } from '@angular/core'
import { Post } from 'src/app/models/post.model'

@Component({
    selector: 'hp-post-tile',
    templateUrl: './post-tile.component.html',
    styleUrls: ['./post-tile.component.scss'],
})
export class PostTileComponent implements OnInit {
    @Input()
    post!: Post

    constructor() {}

    ngOnInit(): void {}
}
