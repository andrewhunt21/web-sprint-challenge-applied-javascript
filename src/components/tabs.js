import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const theTopics = document.createElement('div');
  const tab1 = document.createElement('div');
  // const tab2 = document.createElement('div');
  // const tab3 = document.createElement('div');
  // const tab4 = document.createElement('div');
  // const tab5 = document.createElement('div');

  theTopics.appendChild(tab1);
  // theTopics.appendChild(tab2);
  // theTopics.appendChild(tab3);
  // theTopics.appendChild(tab4);
  // theTopics.appendChild(tab5);

  theTopics.classList.add('topics');
  tab1.classList.add('tab');
  // tab2.classList.add('tab');
  // tab3.classList.add('tab');
  // tab4.classList.add('tab');
  // tab5.classList.add('tab');

  tab1.textContent = topics;
  // tab2.textContent = topics;
  // tab3.textContent = topics;
  // tab4.textContent = topics;
  // tab5.textContent = topics;

  return theTopics;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/topics')
  .then(resp => {
    for ( let i = 0; i < resp.data.topics.length; i++) {
      const tabObj = {
        topics: resp.data.topics[i],
      }
      const tabTopics = Tabs(tabObj);
      document.querySelector(selector).appendChild(tabTopics);
    }
    console.log(resp.data.topics);
  })
  .catch(err => {
    console.error(err);
  })
}

export { Tabs, tabsAppender }
