import {Component, Input, OnInit} from '@angular/core';
import {Tree} from "@types";

@Component({
  selector: 'app-tree[tree]',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() tree!: Tree;
  constructor() { }

  ngOnInit(): void {
  }
}
