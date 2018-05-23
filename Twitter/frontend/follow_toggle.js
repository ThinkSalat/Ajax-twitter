const APIUtil = require('./api_util.js');

class FollowToggle{
  constructor(el){
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }
  render(isDisabled) {
    let following = this.followState ? "Unfollow" : "Follow";
    this.el.text(following);
    if (isDisabled === true) {
      this.el.attr('disabled', true);
    } else {
      this.el.prop('disabled',false);
    }
    
  }
  switchState() {
    this.followState = !this.followState;
  }
  handleClick() {
    this.el.on('click', event => {
      event.preventDefault();
      
      this.render(true);
      
      if (this.followState)  {
        APIUtil.unfollowUser(this.userId)
        .then(this.switchState.bind(this))
        .then(this.render.bind(this));
      } else {
        APIUtil.followUser(this.userId)
        .then(this.switchState.bind(this))
        .then(this.render.bind(this));
      }
      
    });
  }
}

module.exports = FollowToggle;