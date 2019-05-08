const data = {
  "items": [
    {
      "id": "1",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit nam placerat mi eget dolor efficitur",
      "description": "Donec ipsum dui, pharetra nec dignissim sit amet, dignissim ac dolor. Nulla facilisi. Cras ut hendrerit nunc. Aenean lobortis congue magna id aliquam. Ut eu odio in ante tincidunt varius at vel sapien.",
      "category": "Programs, Company",
      "link": "http://www.google.com.au",
      "featured": "true"
    },
    {
      "id": "2",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "category": "Company, Research",
      "link": "http://www.google.com.au",
      "featured": "false"
    },
    {
      "id": "3",
      "title": "Lorem ipsum dolor sit amet, consectetur",
      "category": "Research",
      "link": "http://www.google.com.au",
      "featured": "false"
    },
    {
      "id": "4",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit nam placerat",
      "category": "Research, Programs, Company",
      "link": "http://www.google.com.au",
      "featured": "false",
      "documentSize": "152KB"
    },
    {
      "id": "5",
      "title": "This is a link card with a longer title to show how the grid reacts and to make sure the row doesn't get messed up and can handle things smoothly and elegantly",
      "category": "Research, Programs",
      "link": "http://www.google.com.au",
      "featured": "false"
    },
    {
      "id": "6",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "category": "Research, Programs, Company",
      "link": "http://www.google.com.au",
      "featured": "false",
      "documentSize": "152KB"
    },
    {
      "id": "7",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit nam placerat",
      "category": "Programs",
      "link": "http://www.google.com.au",
      "featured": "false"
    }
  ]
}

// const fetchData = () => {
//   return Promise.resolve(data);
// }

const fetchData = () => {
  return fetch("http://prototype.carter-dev.net/fed-test/items.json").then(
    res => {
      if (res.ok) return res.json();
      return Promise.reject();
    },
    rej => {
      return Promise.reject();
    }
  )
}

export const dataServices = {
  fetchData
}
