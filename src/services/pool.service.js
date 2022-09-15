import axios from "axios";

const GET_NEARBY_POOL_API = "http://10.30.1.92:8081/trip/best-match";
const INIT_POOL_RIDE_API = "http://10.30.1.91:8081/trip/start";
const BOOK_POOL_RIDE_API = "http://10.30.1.91:8081/trip/book";

export const getNearbyPoolRides = ({ success, error, userPosition }) => {
  axios
    .post(GET_NEARBY_POOL_API, userPosition)
    .then((response) => {
      success && success(response);
    })
    .catch((e) => {
      error && error(e);
    });
};

export const initiatePoolRide = ({ success, error, user }) => {
  axios
    .post(INIT_POOL_RIDE_API, user)
    .then((response) => {
      success && success(response);
    })
    .catch((e) => {
      error && error(e);
    });
};

export const bookPoolRide = ({ success, error, user }) => {
  axios
    .post(BOOK_POOL_RIDE_API, user)
    .then((response) => {
      success && success(response);
    })
    .catch((e) => {
      error && error(e);
    });
};
