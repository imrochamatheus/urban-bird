import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar',
})
export class DescricaoReduzida implements PipeTransform {
  transform(value: string, end: number): string {
    return value.slice(0, end || 15) + '...';
  }
}
