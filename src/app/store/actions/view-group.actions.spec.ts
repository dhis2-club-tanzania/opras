import * as fromViewGroup from './view-group.actions';

describe('loadViewGroups', () => {
  it('should return an action', () => {
    expect(fromViewGroup.loadViewGroups().type).toBe('[ViewGroup] Load ViewGroups');
  });
});
