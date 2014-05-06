var ChatView = Backbone.View.extend({
  className: 'chat',
  template: _.template('<span class="chatUsername"><%- username %></span>: <span class="chatText"><%- text %></span>'),
  initialize: function(){
    this.render();
  },
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
