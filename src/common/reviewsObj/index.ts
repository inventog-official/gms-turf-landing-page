// Array of image paths for random selection
const imagePaths = [
  "/reviewsAvatarPics/avatarPic-1.png",
  "/reviewsAvatarPics/avatarPic-2.png",
  "/reviewsAvatarPics/avatarPic-3.png",
  "/reviewsAvatarPics/avatarPic-4.png",
  "/reviewsAvatarPics/avatarPic-5.png",
];

// Function to get a random image path
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  return imagePaths[randomIndex];
};

// Reviews data with dynamic image assignment
export const reviewsObj = [
  {
    review:
      '"Amazing way of explanation about the plan and way of approach got our trust onto them flawlessly."',
    img: getRandomImage(),
  },
  {
    review:
      '"We got results that we were promised by them without any hassle and hardship."',
    img: getRandomImage(),
  },
  {
    review:
      '"The turf is very spacious and large as compared to other turfs in the city."',
    img: getRandomImage(),
  },
  {
    review:
      '"From planning to executing it in real time, they have delivered a great work."',
    img: getRandomImage(),
  },
  {
    review:
      '"Delivery of the work within 7-10 days was an amazing work I’ve ever seen in my entire life, without compromising the quality."',
    img: getRandomImage(),
  },
  // Additional reviews with dynamic image assignment
  {
    review:
      '"Building a turf in 1200 sq. fts was just like a dream come true. Amazing work at best cost."',
    img: getRandomImage(),
  },
];
