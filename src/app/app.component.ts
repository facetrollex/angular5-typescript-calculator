import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public result: string = '';

  public memory: String[] = [];

  readonly calcMap: Object[] = [
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '/', '='],
  ];

  public addToCalculation(param: any): void {
    switch (param) {
      case '=':
        this.result = <boolean><any>this.result.length ? this.calculate() : '';
        break;
      case '.':
        if (!isNaN(+this.result[this.result.length - 1])) {
          this.result += param;
        }
        break;
      default:
        this.result += param;
        break;
    }
  }

  private calculate(): string {
    let result: string;

    try {
      result = eval(this.result).toString();
    } catch (e) {
      result = 'Syntax Error';
    }

    return result;
  }

  public delete(last?: boolean): void {
    this.result = last ? this.result.slice(0, -1) : '';
  }

  public saveToMemory(): void {
    if (!isNaN(+this.result)) {
      this.memory.push(this.result);
    }
  }

  public copyFromMemory(item: string): void {
    this.result = item;
  }

  public deleteFromMemory(index: number): void {
    this.memory.splice(index, 1);
  }
}
