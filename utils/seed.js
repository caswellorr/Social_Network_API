const connection = require('../config/connection');

const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});


  // Add thoughts to the collection and await the results
  const thought = await Thought.collection.insertOne({
    thoughtText: 'Yennefer is the most beautiful witch in the land',
    createdAt: Date.now,
    username: "geraltOfRivia",
    reactions: []
  });

   // Add thoughts to the collection and await the results
   const user = await User.collection.insertOne({
    username: 'geraltOfRivia',
    email: 'geralt@witcher.com',
    thoughts: [],
    friends: []
  });

  // Log out the seed data to indicate what should appear in the database
  console.log(thought._id);
  console.table(user);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
