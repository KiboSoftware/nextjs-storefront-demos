import { buildOrdersFilterInput } from '../buildOrdersFilterInput'

describe('[helpers] buildOrdersFilterInput function', () => {
  it('should return order filter by order number and billing email', () => {
    const variables = {
      startIndex: 0,
      pageSize: 20,
    }

    const orderHistoryVariables = {
      ...variables,
      filters: [],
    }
    const orderStatusVariables = {
      ...variables,
      orderNumber: '81',
      billingEmail: 'chandra@email.com',
    }

    const buildOrdersFilterInputMock = {
      startIndex: 0,
      pageSize: 20,
      filter: 'orderNumber eq 81 and email eq chandra@email.com and status ne Abandoned',
    }
    const buildOrdersHistoryMock = {
      startIndex: 0,
      pageSize: 20,
      filter: 'status ne Abandoned',
    }
    expect(buildOrdersFilterInput(orderStatusVariables)).toStrictEqual(buildOrdersFilterInputMock)
    expect(buildOrdersFilterInput(orderHistoryVariables)).toStrictEqual(buildOrdersHistoryMock)
  })
})
