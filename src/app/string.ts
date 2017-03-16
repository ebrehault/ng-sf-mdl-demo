import { Component } from '@angular/core';
import { StringWidget } from 'angular2-schema-form/src/defaultwidgets';

@Component({
  selector: 'mdl-sf-string-widget',
  templateUrl: './string.widget.html'
})
export class MdlStringWidget extends StringWidget {}