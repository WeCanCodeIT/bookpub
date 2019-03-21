import events from './utils/events/event-actions'
import api from './utils/api/api-actions'

import Authors from './components/Authors'

main()

function main() {
  api.getRequest('/authors', authors => {
    getAppContext().innerHTML = Authors(authors);
  })

  events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('add-author__submit')) {
      const firstName = document.querySelector('.add-author__first-name').value
      const lastName = document.querySelector('.add-author__last-name').value

      api.postRequest('/authors/add', {
        firstName: firstName,
        lastName: lastName
      }, (authors) => getAppContext().innerHTML = Authors(authors))
    }
  })
}

function getAppContext() {
  return document.querySelector("#app")
}

