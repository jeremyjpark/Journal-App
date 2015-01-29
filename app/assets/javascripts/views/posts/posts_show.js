JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  template: JST['posts/show'],

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  events: {
    "click button": "deletePostItem"
  },

  deletePostItem: function(event) {
    console.log("clock");
    event.preventDefault();
    this.model.destroy({
      success: function() {
        Backbone.history.navigate("#", { trigger: true })
      }.bind(this)
    });
  }

})
