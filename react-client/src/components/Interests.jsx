import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Interests = (props) => {
  return (
    <div id="interests-container" className="section-container">
      <h3 className="section-headers">Interests</h3>
      <div className="align">
        <div className="interests-header">Books</div>
        {props.interests.books.map((book, i) => {
          return (
            <div id="books" className="interests-item">
              <div className="book-title"><a href={"https://www.goodreads.com/book/show/" + book.id}  target="_blank">{book.title} </a></div>
              <div className="book-author">by {book.author}</div>
              {i === props.interests.books.length - 1 ? <div><Button bsStyle="primary" bsSize="xs" className="buttons">See more</Button></div> : ''}
            </div>
          )
        })}
        <div className="interests-header">Podcasts</div>
        {props.interests.podcasts.map((show) => {
          return (
            <div id="podcast" className="interests-item">
              <div className="podcast-name">{show.name}: </div>
              <div className="podcast-title"><a href={show.link}  target="_blank">{show.title} </a></div>
            </div>
          )
        })}
        <div className="interests-header">Basketball</div>
          <div id="basketball" className="interests-item">
            <div className="basketball-info">Though I live in the Bay, I am a huge LeBron James fan!</div>
            <div className="basketball-info">I played competively in high school and made the <a href="http://archives.starbulletin.com/2006/04/02/sports/story05.html" target="_blank">2006</a> Hawaii All State Basketball team</div>
          </div>
      </div>
    </div>
  )
}

export default Interests;
