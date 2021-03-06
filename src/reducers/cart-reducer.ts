import { ADD_TO_CART, DELETE_ROW } from "../actions/cart-actions";

const initialState = {
  cart: [
    {
      product: "bread 700g",
      quantity: 2,
      unitCost: 90,
    },
    {
      product: "milk 500ml",
      quantity: 1,
      unitCost: 47,
    },
  ],
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ],
};

export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action);
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }

    case DELETE_ROW: {
      console.log("===action====", action);
      let newPosts = state.posts.filter((item) => item.id !== action.id);
      return {
        ...state,
        posts: newPosts,
      };
    }

    default:
      return state;
  }
}
