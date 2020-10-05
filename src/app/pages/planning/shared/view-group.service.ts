import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewGroupService {
  private currentGroup: Observable<any>;
  constructor() {
    this.currentGroup = of('ts');
  }
  public getCurrentGroup(): Observable<string> {
    this.currentGroup.subscribe(
      (data) => {
        return data;
      },
      (err) => {
        console.log(err);
      }
    );
    return this.currentGroup;
  }
  public setGroup(index: number): void {
    if (index == 1) {
      this.currentGroup = of('as');
    } else {
      this.currentGroup = of('ts');
    }
  }
}
