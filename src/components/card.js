import axios from "axios";

function Card(article) {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // const headline = null;
  // const authorPhoto = null;
  // const authorName = null;

  const theCard = document.createElement('div');
  const theHeadline = document.createElement('div');
  const theAuthor = document.createElement('div');
  const imgContainer = document.createElement('div');
  const theImg = document.createElement('img');
  const theName = document.createElement('span');

  theCard.appendChild(theHeadline);
  theCard.appendChild(theAuthor);
  theAuthor.appendChild(imgContainer);
  imgContainer.appendChild(theImg);
  theAuthor.appendChild(theName);

  theCard.classList.add('card');
  theHeadline.classList.add('headline');
  theAuthor.classList.add('author');
  imgContainer.classList.add('img-container');

  theHeadline.textContent = `${article.headline}`;
  theImg.src = `${article.authorPhoto}`;
  theAuthor.textContent = `By ${article.authorName}`;

  theCard.addEventListener('click', evt => {
    console.log(evt.theHeadline);
  })

  return theCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
  .then(resp => {
    for(let i = 0; i < resp.data.articles.javascript.length; i++) {
      const articleObj = {
        headline: resp.data.articles.javascript[i].headline,
        authorPhoto: resp.data.articles.javascript[i].authorPhoto,
        authorName: resp.data.articles.javascript[i].authorName
      }
      const theArticles = Card(articleObj);
      document.querySelector(selector).appendChild(theArticles);
    }
    console.log(resp.data.articles);
  })
  .catch(err => {
    console.error(err);
  })
}

export { Card, cardAppender }
