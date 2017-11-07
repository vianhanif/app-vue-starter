import store from '@/store';

describe('store test suite', () => {
  let stateLength = Object.keys(store.state).length
  it(`has all ${stateLength} modules`, () => {
    expect(Object.keys(store.state).length).to.equal(stateLength)
  })
})
