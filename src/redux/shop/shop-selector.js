import {createSelector} from "reselect";


const selectShop = state=>state.shop;

export const selectShopData = createSelector([selectShop],(data)=>data.collections);

export const selectCollectionForPreview = createSelector([selectShopData],collections => collections?Object.keys(collections).map((key)=>collections[key]):[])

export const selectisFetching = createSelector([selectShop],shop=>shop.isFetching);

export const selectCollection = collectionUrlParam => (
    createSelector(
        [selectShopData],
        collections=> collections?(
            collections[collectionUrlParam]
        ):null
    )
)

export const selectisLoaded = createSelector([selectShop],shop=>!!shop.collections);
