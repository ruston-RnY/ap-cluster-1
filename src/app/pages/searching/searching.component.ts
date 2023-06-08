import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss'],
})
export class SearchingComponent implements OnInit {
  public arrSearch = [1, 2, 3, 4, 5, 7, 8, 9];
  public result1!: number;
  public result2!: number;

  constructor() {}

  ngOnInit(): void {}

  binary_Search(items: any, value: any) {
    var firstIndex = 0,
      lastIndex = items.length - 1,
      middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (items[middleIndex] != value && firstIndex < lastIndex) {
      if (value < items[middleIndex]) {
        lastIndex = middleIndex - 1;
      } else if (value > items[middleIndex]) {
        firstIndex = middleIndex + 1;
      }
      middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return items[middleIndex] != value ? -1 : middleIndex;
  }

  onSearch() {
    this.result1 = this.binary_Search(this.arrSearch, 1);
    this.result2 = this.binary_Search(this.arrSearch, 5);
  }
}
