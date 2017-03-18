import { DefaultWidgetRegistry } from 'angular2-schema-form';

import { MdlStringWidget } from './string';

export class MdlWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('string',  MdlStringWidget);
  }
}