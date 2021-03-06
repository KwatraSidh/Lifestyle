import {createSelector} from 'reselect';

// const CATEGORY_ID_MAP ={
//     hats:1,
//     sneakers : 2,
//     jackets : 3,
//     womens : 4,
//     mens:5

// } not required anymore

const selectShop = state => state.shop;

export const shopSelector = createSelector(
    [selectShop],
    shop => shop.collections
)
// below code is to convert collection json object to array for the collection overview item
export const selectCollectionOverview = createSelector(
    [shopSelector],
    collections => Object.keys(collections).map(key=> collections[key])
)

export const selectCategory = categoryUrlParam => createSelector(
    [shopSelector],
   // collections => collections.find(collections => collections.id===CATEGORY_ID_MAP[categoryUrlParam])
   // data normalization achieved
   collections=>collections[categoryUrlParam]
)


