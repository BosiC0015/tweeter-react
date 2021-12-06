import React from "react";

function Profile()  {
  const firstName = "Amy"
  const lastName = "Mansell"
  const avatar = "/Users/bosichen/w6/tweeter-react/html_version/profile-hex.png"

  return (
    // User Profile
    <aside>
      <div className="profile">
        <img className="profile__image" src={avatar} alt="User Avatar" />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
      </div>
    </aside>
  );
}

export default Profile;