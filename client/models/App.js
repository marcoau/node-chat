var App = Backbone.Model.extend({
  initialize: function(){

    // this.set({chats: new Chats({})});
    this.set({chats: new Chats({username: 'name1', text: 'hi', roomname: 'lobby'})});
    console.log(this.get('chats'));
    this.set({roomsList: new RoomsList()});
    this.set({currentRoom: 'lobby'});
    this.set({username: 'trololo'});
    this.set({friendsList: new FriendsList()});
    
    var that = this;
    setInterval(function(){
      that.fetch();
    },3000);
  },

  fetch: function(){
    var that = this;
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:3000/classes',
      data: {roomname: that.currentRoom},
      contentType: 'application/json',
      dataType: 'json',
      success: function(response){
        console.log('fetch success');
        console.log(response);
      },
      error: function(error){
        console.log('fetch fail');
        console.error(error);
      }
    });
  },

  send: function(){
    var chat = {
      username: this.get('username'),
      text: 'you are trolled',
      roomname: this.get('currentRoom')
    };
    console.log(chat);
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:3000/classes',
      data: JSON.stringify(chat),
      contentType: 'application/json',
      success: function(data){
        console.log('send success');
      },
      error: function(error){
        console.log('send fail');
        console.error(error);
      }
    })
  },

});