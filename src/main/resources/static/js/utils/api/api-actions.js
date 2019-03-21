export function getRequest(location, callback) {
  fetch(location)
    .then(res => res.json())
    .then(response => {
      callback(response);
    });
}

export function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  })
    .then(res => res.json())
    .then(data => callback(data));
}

export function putRequest(location, requestBody, callback) {
  fetch(location, {
    method: "PUT",
    body: JSON.stringify(requestBody)
  })
    .then(res => res.json())
    .then(data => callback(data));
}

export function deleteRequest(location, requestBody, callback) {
  fetch(location, {
    method: "DELETE",
    body: JSON.stringify(requestBody)
  })
    .then(res => res.json())
    .then(data => callback(data));
}

export default {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
};
