var NameView = Backbone.View.extend({
  className: 'currentName',
  template: _.template('<span>You are chatting here as: </span><span class="name"><%= username %></span>' +
    '<button class="changeName">Change</button><input class="newName" placeholder="New Name" />'),
  events: {
    'click .changeName': function(){
      this.model.set({username: $('.newName').val()});
    }
  },
  initialize: function(){
    this.render();
    this.model.on('change:username', function(){
      this.render();
    }, this);
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});
