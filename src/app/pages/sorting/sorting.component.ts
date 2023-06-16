import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  public arrFieldInput: any = [
    {
      value: null,
    },
  ];

  public resultBubleSort: any = [];
  public searchValue!: number;
  public searchResult!: number;
  public isSearch: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  addNumber() {
    this.arrFieldInput.push({ value: null });
  }

  deleteNumber(idx: number) {
    this.arrFieldInput = this.arrFieldInput.filter(
      (item: any, i: number) => i != idx
    );
  }

  bubbleSort() {
    const arr: any = [];
    this.arrFieldInput.forEach((item: any) => {
      arr.push(item.value);
    });

    let swapp;
    do {
      swapp = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapp = true;
        }
      }
    } while (swapp);

    this.resultBubleSort = arr;
  }

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

  search() {
    this.isSearch = true;
    this.searchResult = this.binary_Search(
      this.resultBubleSort,
      this.searchValue
    );
  }
}
