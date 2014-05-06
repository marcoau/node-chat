var RoomView = Backbone.View.extend({
  className: 'currentRoom',
  template: _.template('<span>You are in room: </span><span class="roomName"><%= currentRoom %></span>'),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});
