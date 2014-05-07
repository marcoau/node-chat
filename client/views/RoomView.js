var RoomView = Backbone.View.extend({
  className: 'currentRoom',
  template: _.template('<span>You are in room: </span><span class="roomName"><%= currentRoom %></span>' + 
    '<button class="changeRoom">Change</button><input class="newRoom" placeholder="New Room" />'),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});
