class ValidationError extends Error {
  constructor(value) {
    super(`Invalid input for the ${value}! Value of undefined.`);
    this.name = "ValidationError";
  }
}

class ValueTooShortError extends Error {
  constructor(value) {
    super(`Invalid input for the ${value}! Provided value is too short.`);
    this.name = "ValueTooShortError";
  }
}

class User {
  constructor(username, password) {
    // in case when you are not sure if a variable has been declared - more secure than 'username === undefined'?
    if (typeof username === "undefined" || typeof password === "undefined") {
      throw new ValidationError("User");
    } else if (username.length < 1 || password.length < 1) {
      throw new ValueTooShortError("User");
    }
    this.username = String(username);
    this.password = String(password);
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    if (typeof username === "undefined") {
      throw new ValidationError("username");
    } else if (username.length < 1) {
      throw new ValueTooShortError("username");
    }
    this.username = username;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    if (typeof password === "undefined") {
      throw new ValidationError("password");
    } else if (password < 5) {
      throw new Error(
        "Invalid input for the password! Provided password is too weak."
      );
    }
    this.password = password;
  }

  toString() {
    return (
      "User{username'" + this.username + "', password='" + this.password + "'}"
    );
  }
}

class Artist extends User {
  constructor(username, password, firstName, lastName, stagename) {
    super(username, password);
    if (typeof firstName === "undefined" || typeof lastName === "undefined") {
      throw new ValidationError("Artist");
    } else if (firstName.length < 1 || lastName.length < 1) {
      throw new ValueTooShortError("Artist");
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
      throw new ValidationError("firstName");
    } else if (firstName.length < 1) {
      throw new ValueTooShortError("firstName");
    }
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastName) {
    if (typeof lastName === "undefined") {
      throw new ValidationError("lastName");
    } else if (lastName.length < 1) {
      throw new ValueTooShortError("lastName");

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
      throw new ValueTooShortError("stageName");
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
      "Artist{" +
      "username='" +
      this.username +
      "', password='" +
      this.password +
      "', firstName='" +
      this.firstName +
      "', lastName='" +
      this.lastName +
      "', stagename='" +
      this.stagename +
      "'}"
    );
  }
}

class Song {
  constructor(title, url) {
    if (typeof title === "undefined" || typeof url === "undefined") {
      throw new ValidationError("Song");
    } else if (title.length < 1 || url.length < 1) {
      throw new ValueTooShortError("Song");
    }
    this.title = title;
    this.url = url;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    if (typeof title === "undefined") {
      throw new ValidationError("title");
    } else if (title.length < 1) {
      throw new ValueTooShortError("title");
    }
  }

  getUrl() {
    return this.url;
  }

  setUrl(url) {
    if (typeof url === "undefined") {
      throw new ValidationError("url");
    } else if (url.length < 1) {
      throw new ValueTooShortError("url");
    }
    this.url = url;
  }

  toString() {
    return "Song{" + "title='" + this.title + "', url='" + this.url + "'}";
  }
}

var user_1 = new User("enrico", "NINETOZERO");

var artist_1 = new Artist(
  user_1.getUsername(),
  user_1.getPassword(),
  "Enrico",
  "Sangiuliano"
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
