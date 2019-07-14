import { createSelector } from 'reselect';
import { DETALLE_CARD_SELECTED } from '../constants/datalleconst';

const detailCardReducersSelectors = () =>
  createSelector(
    [
      (state) => {
        return state.detailCardReducers.getIn([
            DETALLE_CARD_SELECTED.REDUCERS.data,
        ]);
      },
    ],
    (data) => {
      return data;
    },
  );
export { detailCardReducersSelectors };