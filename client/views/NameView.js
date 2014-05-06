var NameView = Backbone.View.extend({
  className: 'currentName',
  template: _.template('<span>You are chatting here as: </span><span class="name"><%= username %></span>'),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});
