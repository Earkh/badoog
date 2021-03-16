import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliceService {

  constructor() { }

  start: number = 0;
  end: number = 1;

  getStart() {
      return this.start;
  }

  getEnd() {
      return this.end;
  }

  increaseS() {
      this.start += 1;
      this.end += 1;
      console.log(this.start + " - " + this.end)
  }
}
