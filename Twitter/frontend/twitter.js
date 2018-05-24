const FollowToggle = require("./follow_toggle.js");
const UserSearch = require("./user_search.js");
$(() => {

  let $followButtons = $(".follow-toggle");
  $followButtons.each((i, el)=>{
    let $el = $(el);
    let ft = new FollowToggle(el);
  });

  let el = $(".user-search");
  el.each((i,el)=>{
    let $el = $(el);
    let userSearch = new UserSearch(el);
  });

});
