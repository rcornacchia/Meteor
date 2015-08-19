if(Posts.find().count() === 0) {
  Posts.insert({
    title: 'Google',
    url: 'http://google.com'
  });
  Posts.insert({
    title: 'Twitter',
    url: 'http://twitter.com'
  });
  Posts.insert({
    title: 'Robraven',
    url: 'robraven.com'
  });
}
