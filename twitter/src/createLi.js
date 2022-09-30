import moment from "moment";

export function createLi(tweet) {
  const li = document.createElement("li");
  li.classList.add("tweet");

  const textDiv = document.createElement("div");
  textDiv.textContent = tweet.full_text;
  textDiv.classList.add("text");
  li.append(textDiv);

  const authorDiv = document.createElement("div");
  authorDiv.textContent = tweet.user.name;
  authorDiv.classList.add("author");
  li.append(authorDiv);

  const dateDiv = document.createElement("div");
  dateDiv.textContent = moment(tweet.created_at).fromNow();
  dateDiv.classList.add("date");
  li.append(dateDiv);

  return li;
}
