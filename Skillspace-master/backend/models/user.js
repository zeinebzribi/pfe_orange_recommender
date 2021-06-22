const db = require('../util/database');

module.exports = class User {
  constructor(name,lastname, email,numtel, password,genre,photo,linkedin,youtube) {
    this.name = name;
    this.lastname =lastname;
    this.email = email;
    this.numtel = numtel
    this.password = password;
    this.genre = genre;
    this.photo = photo;
    this.linkedin = linkedin;
    this.youtube = youtube;
  }

  static find(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (name,lastname,email,numtel,password,genre,photo,linkedin,youtube) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [user.name, user.lastname, user.email, user.numtel, user.password, user.genre, user.photo, user.linkedin, user.youtube]
    );
  }
};
