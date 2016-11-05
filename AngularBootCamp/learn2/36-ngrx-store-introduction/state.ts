import { Action } from '@ngrx/store';

export const PICK_BERRY = 'PICK_BERRY';
export const PICK_APPLE = 'PICK_APPLE';
export const EMPTY_CART = 'EMPTY_CART';

export interface IAppState {
  berryCounter: number;
  appleCounter: number;
}

export const berryCounter =
 (value: number = 0, action: Action) => {
  switch (action.type) {
    case PICK_BERRY:
      return value + 1;

    case EMPTY_CART:
      return 0;

    default:
      return value;
  }
};

export const appleCounter = (value: number = 0, action: Action) => {
  switch (action.type) {
    case PICK_APPLE:
      // Apples apparently sometimes come in weirdly sized bunches
      return value + value % 5 + 1;

    case EMPTY_CART:
      return 0;

    default:
      return value;
  }
};
