const APIUtil = require('./api_util.js');


class UserSearch{
  constructor(el){
    this.el = $(el);
    this.input = el.find("#input");
    this.ul = el.find(".users");
    this.handleInput();
    console.log(this.input.val());
  }

  handleInput(){
    this.input.on("input", event => {
      console.log(event);
      APIUtil.searchUsers(this.input.val())
      .then(response => {
        console.log(response);
      });
    });
  }
}

module.exports = UserSearch;
