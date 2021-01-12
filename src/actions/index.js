export const FETCH_GARAGE = 'FETCH_GARAGE';
export const POST_CAR = 'POST_CAR';

// TODO: add and export your own actions

export function fetchCars(garage){

  const promise =
    fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_GARAGE,
    payload: promise
  }
}

export function createCar(body, garage, callback) {

  const promise =
    fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(callback);

  return {
    type: POST_CAR,
    payload: promise
  }
}
