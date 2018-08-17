import { LOAD_CARDS, ADD_CARD} from '../actions';

const initialState = [
  {
    title: 'Gather 20 Unique Mushrooms',
    body: 'The Ancient Forest is teeming with ingredients. Bring them to me!',
    priority_id: 1,
    status_id: 2,
    created_by: 3,
    assigned_to: 4
  }
]

const cardList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_CARDS:
      return [...action.cards];
    case ADD_CARD:
      return [...state, action.card];
    default:
      return state;
  }
}

export default cardList;