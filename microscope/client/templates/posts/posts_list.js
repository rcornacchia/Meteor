var postsData = [
  {
    title: 'Introducing telescope',
    url: 'http://google.com'
  },
  {
    title: 'Twitter',
    url: 'http://twitter.com'
  },
  {
    title: 'Robert',
    url: 'http://robraven.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});
