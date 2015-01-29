JournalApp.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, "change:title add remove reset", this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    var that = this;
    this.collection.each(function (post) {
      var view = new JournalApp.Views.PostsIndexItem({ model: post });
      that.$el.find('ul').append(view.render().$el);
    });

    $('body').append(this.$el);
    
    return this;
  }
});
