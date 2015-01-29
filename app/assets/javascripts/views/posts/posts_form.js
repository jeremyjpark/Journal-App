JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  events: {
    "click button" : "update"
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  update: function (event) {
    event.preventDefault();
    var content = $('form').serializeJSON().post;
    this.model.save(content, {
      success: function() {
        Backbone.history.navigate("#", { trigger: true, merge: true })
      }.bind(this)
    });
  }
})
