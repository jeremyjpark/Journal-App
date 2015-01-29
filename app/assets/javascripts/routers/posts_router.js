JournalApp.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new" : "postsNew",
    "posts/:id": "postsShow",
    "posts/:id/edit" : "postsForm"
  },

  postsIndex: function () {
    JournalApp.Collections.posts.fetch();

    var indexView = new JournalApp.Views.PostsIndex({
      collection: JournalApp.Collections.posts
    });

    this._swapView(indexView);
  },

  postsShow: function(id) {
    var post = JournalApp.Collections.posts.getOrFetch(id);

    var showView = new JournalApp.Views.PostShow({
      model: post
    });

    this._swapView(showView);
  },

  postsForm: function(id) {
    var post = JournalApp.Collections.posts.getOrFetch(id);

    var updatePost = new JournalApp.Views.PostForm({
      model: post
    });

    this._swapView(updatePost);
  },

  postsNew: function() {
    var newPost = new JournalApp.Models.Post();
    var post = new JournalApp.Views.PostForm({
      model: newPost,
      collection: JournalApp.Collections.posts
    });

    this._swapView(post);
  },

  _swapView: function (newView) {
    this.currentView && this.currentView.remove();
    $("body").html(newView.render().$el);

    this.currentView = newView;
  }

});
