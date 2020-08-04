import { Component, OnInit, Input } from '@angular/core';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="row mt-5">
      <div class="col-12">
        <div class="jumbotron py-3">
          <h3><i [class]="icon"></i> {{ title | titlecase }}</h3>
          <p class="lead">{{ description | paragraphUpperCase }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
