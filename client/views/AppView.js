var AppView = Backbone.View.extend({
  className: 'app',
  events:{
    'submit .input': function(event){
      event.preventDefault();
      this.model.send($('.inputChat').val());
      $('.inputChat').val('');
    }
  },
  initialize: function(){
    this.nameView = new NameView({model: this.model});
    this.$input = $('<form class="input">Chat: <input class="inputChat" type="text" placeholder="Enter chat here!" />' + 
      '<input class="submitChat" type="submit" value="Send" /></form>')
    this.chatsView = new ChatsView({collection: this.model.get('chats')});
    this.render();
  },
  render: function(){
    console.log('render');
    this.$el.append(this.nameView.$el);
    this.$el.append(this.$input);
    this.$el.append(this.chatsView.$el);
    return this.$el;
  }
});
