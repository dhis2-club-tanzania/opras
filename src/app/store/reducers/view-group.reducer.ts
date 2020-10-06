import { Action, createReducer, on } from '@ngrx/store';
import { createGroupSuccess } from '../actions/view-group.actions';
import { loadedBaseState } from '../states/base.state';

export const viewGroupFeatureKey = 'viewGroup';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(createGroupSuccess, (state) => ({ ...state, ...loadedBaseState }))
);
