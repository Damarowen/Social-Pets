
const DATA = {
    cat: {
      name: 'Kitty Cat',
      bio: "I'm the coolest cat around. I'm the cat's meow!",
      profilePictureUrl:
        'https://content.codecademy.com/courses/React/react_lifecycle_cat_profile_picture.jpg',
      friends: ['komodo'],
    },
    dog: {
      name: 'Doggy Dog',
      bio: "I'm the doggity dog! Woof woof!",
      profilePictureUrl:
        'https://content.codecademy.com/courses/React/react_lifecycle_dog_profile_picture.jpg',
      friends: ['komodo'],
    },
    komodo: {
      name: 'Lizard Lady',
      bio: "I'm a Komodo dragon. You'll love me.",
      profilePictureUrl:
        'https://content.codecademy.com/courses/React/react_lifecycle_komodo_profile_picture.jpg',
      friends: ['cat', 'dog'],
    },
  };
  

   const fetchUserData = (username, callback) => {

    //* delay for loading 1 detik
    const delay = Math.floor(Math.random() * 1000) + 500;

    const timeout = setTimeout(() => {
      callback(DATA[username]);
    }, delay);
  
 
    return timeout
  }
  
export default fetchUserData;