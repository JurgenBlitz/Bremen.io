import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-pipe',
  template: `
  <p> Date: {{ today | date:'dd/MM/yyyy' }} </p>
  `,
  styles: []
})
export class BuiltInPipesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}