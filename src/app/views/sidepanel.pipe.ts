import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sidepanel',
})
export class SidepanelPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const result = value.filter((data) => data.parentId === args.pageId);
    return result;
  }
}
