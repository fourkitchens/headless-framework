'use strict';

module.exports = function attach(app) {

  /**
   * Posts
   */
  app.routeSection('/posts', 'content/posts/posts.dust', {
    resource: ['blogposts'],
    processors: []
  });

};
