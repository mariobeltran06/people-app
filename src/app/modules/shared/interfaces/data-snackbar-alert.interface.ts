export interface DataSnackbarAlert {
  message: string;
  type: TypeSnackbarAlert;
}

export type TypeSnackbarAlert = 'success' | 'error';
