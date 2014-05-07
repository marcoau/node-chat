var RoomView = Backbone.View.extend({
  className: 'currentRoom',
  template: _.template('<span>You are in room: </span><span class="roomName"><%= currentRoom %></span>' + 
    '<button class="changeRoom">Change</button><input class="newRoom" placeholder="New Room" />'),
  events: {
    'click .changeRoom': function(){
      this.model.set({currentRoom: $('.newRoom').val()});
    }
  },
  initialize: function(){
    this.render();
    this.model.on('change:currentRoom', function(){
      this.render();
    }, this);
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});
