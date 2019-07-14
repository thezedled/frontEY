import { DETALLE_CARD_SELECTED } from '../constants/datalleconst';

const detalleCardSelected = (detalleCard) => ({
  type:
  DETALLE_CARD_SELECTED.ACTIONS
      .ESL_SET_DATA_DETALLE_CARD_SELECTED,
  detalleCard,
});

const actionDetalleCardSelected = () => ({
  type:
  DETALLE_CARD_SELECTED.ACTIONS
      .ESL_CLEAR_DATA_DETALLE_CARD_SELECTED,
});

const setDetalleCard = (detalleCard) => (
  dispatch,
  getState,
) => {
  return new Promise((resolve, reject) => {
    dispatch(detalleCardSelected(detalleCard));
    resolve();
  });
};

const clearDetalleCard = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(actionDetalleCardSelected());
    resolve();
  });
};

export const actionDetalleCard= {
  setDetalleCard,
  clearDetalleCard,
};