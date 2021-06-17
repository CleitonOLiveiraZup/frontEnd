import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[myFor]',
})
export class ForDirective implements OnInit {
  @Input('myForEm') numbers: number[] = [];

  constructor() {}
  ngOnInit(): void {}
}
