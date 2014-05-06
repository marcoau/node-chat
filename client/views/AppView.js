var AppView = Backbone.View.extend({
  className: 'app',
  events:{
    'submit .input': function(event){
      event.preventDefault();
      this.model.send();
      $('.inputChat').val('');
    }
  },
  initialize: function(){
    this.$input = $('<form class="input">Chat: <input class="inputChat" type="text" placeholder="Enter chat here!" />' + 
      '<input class="submitChat" type="submit" value="Send" /></form>')
    this.$chats = new ChatsView({collection: this.model.get('chats')}).$el;
    this.render();
  },
  render: function(){
    console.log('render');
    this.$el.append(this.$input);
    this.$el.append(this.$chats);
    return this.$el;
  }
});
