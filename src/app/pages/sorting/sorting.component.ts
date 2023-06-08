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
}
