import { CREDITS_URL, API_URL, API_ERRORS } from "./constants";

export function postImage(body, token) {
  return fetch(API_URL, {
    method: "POST",
    body,
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      const { status } = res;

      try {
        if (status === 200) {
          return res.json();
        } else if (status === 400) {
          throw API_ERRORS.STATUS_400;
        } else if (status === 401) {
          throw API_ERRORS.STATUS_401;
        } else if (status === 402) {
          throw API_ERRORS.STATUS_402;
        } else if (status === 403) {
          throw API_ERRORS.STATUS_403;
        } else if (status === 503) {
          throw API_ERRORS.STATUS_503;
        } else {
          throw API_ERRORS.STATUS_400;
        }
      } finally {
      }
    })
    .then(async json => {
      if (json.code !== "success") {
        throw new Error("Error during fetching the heatmap");
      }
      const svg = json.svg;
      return svg;
    });
}

export function getCredits(token) {
  return fetch(CREDITS_URL, {
    method: "GET",
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      const { status } = res;

      try {
        if (status === 200) {
          return res.json();
        } else if (status === 400) {
          throw API_ERRORS.STATUS_400;
        } else if (status === 401) {
          throw API_ERRORS.STATUS_401;
        } else if (status === 402) {
          throw API_ERRORS.STATUS_402;
        } else if (status === 403) {
          throw API_ERRORS.STATUS_403;
        } else if (status === 503) {
          throw API_ERRORS.STATUS_503;
        } else {
          throw API_ERRORS.STATUS_400;
        }
      } finally {
      }
    })
    .then(async json => {
      return json.credits;
    });
}
