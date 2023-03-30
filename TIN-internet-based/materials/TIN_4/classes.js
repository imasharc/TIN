class User {
  constructor(username, password) {
    // in case when you are not sure if a variable has been declared - more secure than 'username === undefined'?
    if (typeof username === "undefined" || typeof password === "undefined") {
      console.error("Invalid input for the user! Value of undefined");
      return -1;
    } else if (username.length < 1 || password < 1) {
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
  constructor(username, password, stagename) {
    super(username, password);
    if (typeof stagename === "undefined") {
      console.error("Invalid input for the stagename! Value of undefined");
      return -1;
    } else if (stagename.length < 1) {
      console.error(
        "Invalid input for the stagename! Provided value is too short"
      );
      return -1;
    }
    this.stagename = stagename;
  }

  getStagename() {
    return this.stagename;
  }

  setStagename(stagename) {
    if (typeof stagename === "undefined") {
      console.error("Invalid input for the stagename! Value of undefined");
      return -1;
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
}
