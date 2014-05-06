var ChatsView = Backbone.View.extend({
  className: 'chats',
  initialize: function(){
    this.render();
    console.log(this.$el);
  },
  render: function(){
    //??
    this.$el.detach();
    this.collection.each(function(chat){
      this.$el.append(new ChatView({model: chat}).$el);
    }, this);
    return this.$el;
  }
});
