import axios from "axios";


const quinpoolServiceEndpoint = "https://quinpool-service.vercel.app";

const GET_NEARBY_POOL_API = `${quinpoolServiceEndpoint}/trip/best-match`;
const INIT_POOL_RIDE_API = `${quinpoolServiceEndpoint}/trip/start`;
const BOOK_POOL_RIDE_API = `${quinpoolServiceEndpoint}/trip/book`;

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
