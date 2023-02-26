const list_item = [
  {
    photoUrl:
      "https://img.freepik.com/premium-psd/book-cover-mockup_125540-572.jpg?w=2000",
    title: "ISIC-CONFERENCE VOLUME 1 ISSUE 1",
    date: "12.02.2023",
    subtitle:
      "Oriental Renaissance: Innovative, Educational, Natural and Social sciences” jurnali",
  },
  {
    photoUrl:
      "https://thumbs.dreamstime.com/b/audience-conference-hall-business-presentation-43707326.jpg",
    title: "ISIC-CONFERENCE VOLUME 2 ISSUE 2",
    date: "19.02.2023",
    subtitle:
      "Oriental Renaissance: Innovative, Educational, Natural and Social sciences” jurnali",
  },
  {
    photoUrl:
      "https://thumbs.dreamstime.com/b/speaker-giving-talk-business-meeting-audience-conference-hall-entrepreneurship-concept-102633077.jpg",
    title: "ISIC-CONFERENCE VOLUME 3 ISSUE 3",
    date: "24.02.2023",
    subtitle:
      "Oriental Renaissance: Innovative, Educational, Natural and Social sciences” jurnali",
  },
  {
    photoUrl:
      "https://thumbs.dreamstime.com/b/speaker-giving-presentation-scientific-business-conference-entrepreneurship-symposium-talk-meeting-audience-hall-129467744.jpg",
    title: "ISIC-CONFERENCE VOLUME 4 ISSUE 4",
    date: "24.02.2023",
    subtitle:
      "Oriental Renaissance: Innovative, Educational, Natural and Social sciences” jurnali",
  },
  {
    photoUrl:
      "https://thumbs.dreamstime.com/b/business-speaker-giving-talk-business-conference-event-speaker-giving-talk-conference-hall-business-event-audience-126397652.jpg",
    title: "ISIC-CONFERENCE VOLUME 5 ISSUE 5",
    date: "24.02.2023",
    subtitle:
      "Oriental Renaissance: Innovative, Educational, Natural and Social sciences” jurnali",
  },
  {
    photoUrl:
      "https://st3.depositphotos.com/1056393/17701/i/600/depositphotos_177014804-stock-photo-public-speaker-giving-talk-at.jpg",
    title: "ISIC-CONFERENCE VOLUME 6 ISSUE 6",
    date: "24.02.2023",
    subtitle:
      "Oriental Renaissance: Innovative, Educational, Natural and Social sciences” jurnali",
  },
];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 5;

const navigate = () => {
  location.href = "/pages/inside/inside.html"
};

function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    wrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div class="post" id="post" onclick="navigate()">
          <div class="img-container">
            <img
              src="${item.photoUrl}"
              alt=""
            />
          </div>
          <div class="info-container">
            <p class="date">
              <i class="fa-sharp fa-regular fa-calendar"></i>
              ${item.date}
            </p>
            <h3 class="info-title">${item.title}</h3>
            <p class="info-subtitle">
            ${item.subtitle}
            </p>
          </div>
        </div>
    `
    );
  }
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    DisplayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

DisplayList(list_item, list_element, rows, current_page);
SetupPagination(list_item, pagination_element, rows);
