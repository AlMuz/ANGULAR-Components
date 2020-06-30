import {
  Component,
  ContentChild,
  DoCheck,
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
export class PostComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() postData: Post;
  @Output() onRemove = new EventEmitter<null>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('on Init');
    // console.log(this.infoRef);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }

  ngDoCheck() {
    console.log('Check for something');
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

  removePost(): void {
    this.onRemove.emit(this.postData.id);
  }

}
