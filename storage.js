class Storage {
  static getSearchedUsersFromStorage() {
    //Kulanıcı bilgilerini al

    let users;
    if (localStorage.getItem("searched") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("searched"));
    }
    return users;
  }
  static addSearchedUserToStorage(username) {
    //Kullanıcı bilgilerini ekle
    let users = this.getSearchedUsersFromStorage();
    //indexof
    if (users.indexOf(username) === -1) {
      users.push(username);
    }
    localStorage.setItem("searched", JSON.stringify(users));
  }
  static clearAllSearchedUsersFromStorage() {
    //Kullanıcı Bilgilerini Sil
    localStorage.removeItem("searched");
  }
}
