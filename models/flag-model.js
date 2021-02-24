const database = require('../database/dbConfig');

// Create a flagged post
const createFlaggedPost = (post_id, user_id) => {
  return database('flagged_posts').insert({ post_id, user_id });
};

// Create a flagged comment
const createFlaggedComment = (commentId, userId) => {
  // Yvette / Tyler
};

// Fetch Flagged Posts
const getFlaggedPosts = () => {
  return database('flagged_posts').where({ reviewed: false });
};

// Fetch Flagged comments
const getFlaggedComments = () => {
  return database('flagged_comments').where({reviewed: false});
};

// Archive a flagged post
const archivePost = (postId) => {
  // set visible to false on post
  // set reviewed to true in flagged_posts table
  // Sal
};

// Archive a flagged comment
const archiveComment = (commentId) => {
  // set visible to false on comment
  // set reviewed to true in flagged_comments table
  // Gerardo
};

// Resolve flagged post without archiving

module.exports = {
  createFlaggedPost,
  createFlaggedComment,
  getFlaggedPosts,
  getFlaggedComments,
  archivePost,
  archiveComment,
};
