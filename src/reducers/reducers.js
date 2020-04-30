import { REMOVE_FEATURES, ADD_FEATURES } from "../actions/addFeature";

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: []
    },
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1700 },
      { id: 2, name: "Body kit", price: 1200 },
      { id: 3, name: "22s", price: 1600 },
      { id: 4, name: "Spoiler", price: 350 }
    ]
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_FEATURES:
        return {
          ...state,
          car: {
            ...state.car,
            price: state.car.price + action.payload.price,
            features: [...state.car.features, action.payload]
          },
          additionalFeatures: state.additionalFeatures.filter(
            item => item.id !== action.payload.id
          )
        };
      case REMOVE_FEATURES:
        return {
          ...state,
          car: {
            ...state.car,
            price: state.car.price - action.payload.price,
            features: state.car.features.filter(
              item => item.id !== action.payload.id
            )
          },
          additionalFeatures: [...state.additionalFeatures, action.payload]
        };
  
      default:
        return state;
    }
  }