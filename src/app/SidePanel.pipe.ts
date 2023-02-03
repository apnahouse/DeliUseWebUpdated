import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SidePanel',
})
export class SidePanelPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const result = value.filter((data) => data.parentId === args.pageId);
    return result;
  }
}
