
import { fromJS } from 'immutable';
import { DETALLE_CARD_SELECTED } from '../constants/datalleconst';

const initialObject = fromJS({
  data: null,
});
const detailCardReducers = (state = initialObject, action) => {
  switch (action.type) {
    case DETALLE_CARD_SELECTED.ACTIONS
      .ESL_SET_DATA_DETALLE_CARD_SELECTED:
      return state.set(
        DETALLE_CARD_SELECTED.REDUCERS.data,
        action.detailCardReducers,
      );
    case DETALLE_CARD_SELECTED.ACTIONS
      .ESL_CLEAR_DATA_DETALLE_CARD_SELECTED:
      return state.set(DETALLE_CARD_SELECTED.REDUCERS.data, null);
    default:
      return state;
  }
};
export { detailCardReducers };
