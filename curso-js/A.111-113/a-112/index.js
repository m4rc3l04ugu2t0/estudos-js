const loadResult = (response) => {
  const result = document.querySelector("#result");
  result.innerHTML = response;
};

const loadPage = async (element) => {
  try {
    const href = element.getAttribute("href");
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("ERROR 404!!!");

    const result = await response.text();
    loadResult(result);
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("click", (event) => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    event.preventDefault();
    loadPage(element);
  }
});
