import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public result: string = '';
  public memory: string[] = [];

  readonly calcMap: Object[] = [
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '/', '='],
  ];

  constructor(private snackBar: MatSnackBar) {}

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
      result = eval(this.result.replace(/^0+/, '')).toString();
    } catch (e) {
      this.openSnackBar('Syntax Error!');
      result = 'Syntax Error!';
    }

    return result;
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message,'', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  public delete(last?: boolean): void {
    this.result = last && this.result.length > 1 ? this.result.slice(0, -1) : '';
  }

  public saveToMemory(): void {
    if (!isNaN(+this.result) && this.result.length > 0) {
      this.memory.push(this.result);
      this.openSnackBar('Saved!');
    }
  }

  public copyFromMemory(item: string): void {
    this.result = item;
    this.openSnackBar('Copied!');
  }

  public deleteFromMemory(index: number): void {
    this.memory.splice(index, 1);
    this.openSnackBar('Deleted!');
  }
}
