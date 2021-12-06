import React from "react";

function TweetForm()  {
  const placeholder = 'What are you humming about?';

  return (
    // New tweet input box
    <section class="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onClick={(event) => event.preventDefault()}>
        <textarea class="form__textarea" name="text" placeholder={placeholder}></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span class="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;