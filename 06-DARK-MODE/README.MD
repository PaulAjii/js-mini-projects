## Dark Mode

#### HTML Structure

- main tags
  - nav
    - div.nav-center
      - span 'overreacted'
      - button.btn 'toggle'
  - section.articles
    - article.post
      - h2 'post title'
      - div.post-info
        - span 'date'
        - span 'read time'
      - p 'content'
- div.modal-overlay
  - div.modal-container
    - form.form
      - div.form-control
        - label for="title" "title: "
        - input#title type="text"
      - div.form-control
        - label for="date" "date: "
        - input#date type="date"
      - div.form-control
        - label for="time" "read time: "
        - input#time type="number"
      - div.form-control
        - label for="content" "content: "
        - textarea#content
      - div.action-btns
        - button.btn#close-btn type="button" "close"
        - input.btn type="submit" value="close"
#### Toggle - JS

- select button
- add click event listener

#### Toggle - CSS

- create .dark-theme class

#### Toggle - JS

- select root element (html), toggle .dark-theme

#### Import Data

#### Display Articles

- select articles
- iterate over, return article.post for each article

#### Format Date

- import moment.js
- format date
