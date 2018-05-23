const FollowToggle = require("./follow_toggle.js");
$(() => {

  let $followButtons = $(".follow-toggle");
  $followButtons.each((i, el)=>{
    let $el = $(el);
    let ft = new FollowToggle(el);
  });
});
