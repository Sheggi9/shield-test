import {Component, Input, OnInit} from '@angular/core';
import {TreeItem} from "@interfaces";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent implements OnInit {
  @Input() treeItem!: TreeItem;
  isExpanded = false;
  isEdited = false;
  newLocationName = new FormControl({value: '', disabled: true}, Validators.required);
  constructor() { }

  ngOnInit(): void {
    this.newLocationName.patchValue(this.treeItem.location);
  }
  toggleSubLocations() {
    this.isExpanded = !this.isExpanded
  }
  toggleEdit() {
    this.newLocationName.enable();
    this.isEdited = !this.isEdited
  }
  setNewLocationName() {
    this.newLocationName.disable();
    this.treeItem.location = this.newLocationName.value!;
    this.isEdited = !this.isEdited
  }
  cancelEdit() {
    this.newLocationName.disable();
    if (this.treeItem.location !== this.newLocationName.value) {
      this.newLocationName.patchValue(this.treeItem.location);
    }
    this.isEdited = !this.isEdited
  }
}
