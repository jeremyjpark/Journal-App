JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  template: JST['posts/item'],

  tagName: 'li',

  // initialize: function () {
  //   this.listenTo(this.model, "remove", this.render);
  // },

  events: {
    "click button.delete": "deletePostItem"
  },

  initialize: function () {

  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  deletePostItem: function(event) {
    console.log("clock");
    event.preventDefault();
    this.model.destroy();
  }
});
