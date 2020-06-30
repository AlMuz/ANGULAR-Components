import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {

  @Input() postData: Post;
  @Output() removeEvent: EventEmitter<number> = new EventEmitter<null>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('on Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnDestroy(): void {
    console.log('Destroyed');
  }

  removePost(): void {
    this.removeEvent.emit(this.postData.id);
  }

}
