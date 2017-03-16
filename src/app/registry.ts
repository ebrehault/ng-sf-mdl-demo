import { DefaultWidgetRegistry } from 'angular2-schema-form/src';

import { MdlStringWidget } from './string';

export class MdlWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('string',  MdlStringWidget);
  }
}