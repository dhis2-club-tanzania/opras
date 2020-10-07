import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGroup from '../reducers/view-group.reducer';

export const selectGroupState = createFeatureSelector<any>(
  fromGroup.viewGroupFeatureKey
);
