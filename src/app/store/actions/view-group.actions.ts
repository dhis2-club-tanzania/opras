import { createAction, props } from '@ngrx/store';

export const createGroup = createAction('[createGroup] Create Groups');

export const createGroupSuccess = createAction(
  '[createGroup] Load createGroup Success',
  props<{ activeGroup: any }>()
);

export const createGroupFailure = createAction(
  '[createGroup] Load createGroup Failure',
  props<{ error: any }>()
);
