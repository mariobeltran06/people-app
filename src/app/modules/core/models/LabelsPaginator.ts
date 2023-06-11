import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class LabelsPaginator implements MatPaginatorIntl {
  changes = new Subject<void>();

  itemsPerPageLabel = 'Elementos por página:';
  firstPageLabel = 'Primera Página';
  lastPageLabel = 'Última Página';
  nextPageLabel = 'Siguiente Página';
  previousPageLabel = 'Página Anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return 'Página 1 de 1';
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  }
}
