const { ObjectId } = require('mongodb');

// CREATE NEW POST
const createPost = (postCollection) => async (req, res) => {
  const { userId, title, desc, pic } = req.body;

  const { role } = await userCollection.findOne({ userId });

  if (role === 'user') {
    if (title || desc) {
      const result = await postCollection.insertOne({
        userId,
        title,
        desc,
        pic,
      });

      res.status(200);
      res.json(result);
    } else {
      res.status(400).json({ message: 'All field is required!' });
    }
  } else {
    res.status(400).json({ message: 'Unauthorized User' });
  }
};

// GET ALL POSTS OF A USER
const getUserPosts = (postCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await postCollection.find({ userId: id }).toArray();

    res.status(200);
    res.json(result);
  } else {
    res.status(400).json({ message: 'All field is required!' });
  }
};

// DELETE A POST OF A USER
const deleteUserPost = (postCollection) => async (req, res) => {
  const { postId } = req.params;

  if (postId) {
    const result = await postCollection.findOneAndDelete({
      _id: new ObjectId(postId),
    });

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ message: 'No Post found to delete!' });
    }
  } else {
    res.status(400).json({ message: 'All field is required!' });
  }
};

// UPDATE A POST OF A USER
const updateUserPost = (postCollection) => async (req, res) => {
  const { postId } = req.params;
  const data = req.body;

  if (postId) {
    const result = await postCollection.findOneAndUpdate(
      {
        _id: new ObjectId(postId),
      },
      { $set: data },
      { returnDocument: 'after' } // This ensures that the returned result is the updated document
    );
    res.status(200);
    res.json(result);
  } else {
    res.status(400).json({ message: 'All field is required!' });
  }
};

module.exports = { createPost, getUserPosts, deleteUserPost, updateUserPost };
