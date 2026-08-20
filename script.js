fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Could not load events: ${response.status}`);
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    if (!Array.isArray(events)) {
      throw new Error("Events data must be an array");
    }
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    const list = document.querySelector("#starred");
    list.textContent = "Starred repositories could not be loaded.";
    console.error(error);
  });
