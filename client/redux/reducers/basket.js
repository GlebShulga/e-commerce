export const CHANGE_ITEM_QUANTITY_IN_BASKET = 'CHANGE_ITEM_QUANTITY_IN_BASKET'
const initialState = {
  basketItemsDictionary: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ITEM_QUANTITY_IN_BASKET: {
      return {
        ...state,
        basketItemsDictionary: action.basketItemsDictionary,
        productTitle: action.productTitle
      }
    }
    default:
      return state
  }
}

export function changeItemQuantityInBasket(id, number) {
  return (dispatch, getState) => {
    const store = getState()
    const { basketItemsDictionary } = store.basket
    const { listOfGoods } = store.goods
    const dictionary = listOfGoods.reduce((acc, rec) => {
      return {
        ...acc,
        [rec.id]: { id: rec.id, title: rec.title, image: rec.image, price: rec.price, quantity: 0 }
      }
    }, {})
    const productData = dictionary[id]

    const currentItemQuantityInBasket = basketItemsDictionary[id]?.quantity ?? 0
    const newBasketItemsDictionary = {
      ...basketItemsDictionary,
      [id]: {
        ...productData,
        quantity: Math.max(currentItemQuantityInBasket + number, 0)
      }
    }

    dispatch({
      type: CHANGE_ITEM_QUANTITY_IN_BASKET,
      basketItemsDictionary: newBasketItemsDictionary,
      number,
      id,
      productTitle: productData?.title
    })
  }
}
