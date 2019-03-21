import api from "./utils/api/api-actions";
import render from "./utils/render/render-actions";
import events from "./utils/events/event-actions";

function run() {
  bindHomeApiRequest();
  bindAddAuthorButton();
}

function getAppContext() {
  return document.querySelector("#app");
}

function bindHomeApiRequest() {
  api.getRequest("/authors", function(authors) {
    getAppContext().innerHTML = render.authors(authors);
  });
}

function bindAddAuthorButton() {
  events.on(document.body, "click", event => {
    if (event.target.classList.contains("add-author__submit")) {
      api.postRequest(
        "/authors/add",
        {
          firstName: document.querySelector(".add-author__first-name").value,
          lastName: document.querySelector(".add-author__last-name").value
        },
        authors => {
          getAppContext().innerHTML = render.authors(authors);
        }
      );
    }
  });
}

run();
