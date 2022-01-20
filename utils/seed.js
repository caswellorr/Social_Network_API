const connection = require('../config/connection');

const { User, Thought } = require('../models');

const { getRandomUsername, getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  // Get some random thought objects using a helper function that we imported from ./data
  const thoughts = getRandomThoughts(5);

  // Get some random reaction objects using a helper function that we imported from ./data
  const reactions = getRandomReactions(5);

  // Loop 5 times -- add users to the users array
  for (let i = 0; i < 5; i++) {
    const username = getRandomUsername();

    students.push({
      username,
    });
  }

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Add thoughts to the collection and await the results
  await User.collection.insertOne({
    username: 'geraltOfRivia',
    email: 'geralt@witcher.com',
    thoughts: [...thoughts],
    friends: [...users]
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
