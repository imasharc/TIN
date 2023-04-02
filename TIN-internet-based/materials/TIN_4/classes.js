class User {
  constructor(username, password) {
    // in case when you are not sure if a variable has been declared - more secure than 'username === undefined'?
    if (typeof username === "undefined" || typeof password === "undefined") {
      console.error("Invalid input for the user! Value of undefined");
      return -1;
    } else if (username.length < 1 || password.length < 1) {
      console.error("Invalid input for the user! Provided value is too short");
      return -1;
    }
    this.username = String(username);
    this.password = String(password);
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    if (typeof username === "undefined") {
      console.error("Invalid input for the username! Value of undefined");
      return -1;
    } else if (username.length < 1) {
      console.error(
        "Invalid input for the username! Provided value is too short"
      );
      return -1;
    }
    this.username = username;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    if (typeof password === "undefined") {
      console.error("Invalid input for the password! Value of undefined");
      return -1;
    } else if (password < 1) {
      console.error(
        "Invalid input for the password! Provided value is too short"
      );
      return -1;
    }
    this.password = password;
  }

  toString() {
    return "username: " + this.username + ", password: " + this.password;
  }
}

class Artist extends User {
  constructor(username, password, firstName, lastName, stagename) {
    super(username, password);
    if (typeof firstName === "undefined" || typeof lastName === "undefined") {
      console.error("Invalid input for the artist! Value of undefined");
      return -1;
    } else if (firstName.length < 1 || lastName.length < 1) {
      console.error(
        "Invalid input for the artist! Provided value is too short"
      );
      return -1;
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.setStagename(String(stagename));
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(firstName) {
    if (typeof firstName === "undefined") {
      console.error("Invalid input for the firstName! Value of undefined");
      return -1;
    } else if (firstName.length < 1) {
      console.error(
        "Invalid input for the firstName! Provided value is too short"
      );
      return -1;
    }
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastName) {
    if (typeof lastName === "undefined") {
      console.error("Invalid input for the lastName! Value of undefined");
      return -1;
    } else if (lastName.length < 1) {
      console.error(
        "Invalid input for the lastName! Provided value is too short"
      );
      return -1;
    }
  }

  getStagename() {
    return this.stagename;
  }

  // If no value is provided, stageName is set to firstName + " " + lastName
  setStagename(stagename) {
    if (typeof stagename === "undefined") {
      stagename = this.firstName + " " + this.lastName;
    } else if (stagename.length < 1) {
      console.error(
        "Invalid input for the stagename! Provided value is too short"
      );
      return -1;
    }
    this.stagename = stagename;
  }

  uploadSong(title, url) {
    var song = new Song(title, url);
    console.log(
      "Successfully added song '" +
        song.getTitle() +
        "' under the url of " +
        song.getUrl()
    );
  }

  toString() {
    return (
      "username: " +
      this.username +
      ", password: " +
      this.password +
      ", firstName: " +
      this.firstName +
      ", lastName: " +
      this.lastName +
      ", stagename: " +
      this.stagename
    );
  }
}

class Song {
  constructor(title, url) {
    if (typeof title === "undefined" || typeof url === "undefined") {
      console.error("Invalid input for the song! Value of undefined");
      return -1;
    } else if (title.length < 1 || url.length < 1) {
      console.error("Invalid input for the song! Provided value is too short");
      return -1;
    }
    this.title = title;
    this.url = url;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    if (typeof title === "undefined") {
      console.error("Invalid input for the title! Value of undefined");
      return -1;
    } else if (title.length < 1) {
      console.error("Invalid input for the title! Provided value is too short");
      return -1;
    }
  }

  getUrl() {
    return this.url;
  }

  setUrl(url) {
    if (typeof url === "undefined") {
      console.error("Invalid input for the url! Value of undefined");
      return -1;
    } else if (url.length < 1) {
      console.error("Invalid input for the url! Provided value is too short");
      return -1;
    }
    this.url = url;
  }

  toString() {
    return "title: " + this.title + ", url: " + this.url;
  }
}

var user_1 = new User("enrico", "NINETOZERO");

var artist_1 = new Artist(
  user_1.getUsername(),
  user_1.getPassword(),
  "Enrico",
  "Sangiuliano",
  ""
);

var artist_2 = new Artist(
  "charlotte",
  "charlotte123",
  "Charlotte",
  "KNXT",
  "Charlotte de Witte"
);

var song_1 = new Song(
  "Reflection",
  "https://open.spotify.com/track/67dg2dYPGza76ZEnp7k00d?si=98a7fc8fd3d84082"
);

artist_1.uploadSong(song_1.getTitle(), song_1.getUrl());

artist_2.uploadSong(
  "Missing Channel",
  "https://open.spotify.com/track/1Hs5l7PHbZ0LZAZfAUw1bZ?si=09f194c880614f6d"
);

console.log(user_1.toString());
console.log(artist_1.toString());
console.log(artist_2.toString());
console.log(song_1.toString());
