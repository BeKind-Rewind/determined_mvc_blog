const { Post } = require('../models');

const postData = [
  {
    title: "This is how it starts: SKYNET",
    post_content: "The Georgia Institute of Technology has been awarded a $65 million grant from the U.S.",
    user_id: 1
  },
  {
    title: "Using decades-old tech in today's weapons: Russia's powerful facade, weak under the serface.",
    post_content: "Investigators who examined the electronics in Russias newest cruise missiles",
    user_id: 4
  },
  {
    title: "Tech-powered protein harvest. Sounds like Bit Byte material!",
    post_content: "Finnish industrial biotech startup Solar Foods",
    user_id: 1
  },
  {
    title: "Shifting tech away from China",
    post_content: "China and Google are starting to move manufacturing SLOWLY out of China",
    user_id: 4
  },
  {
    title: "A platform to buy and sell digital artwork",
    post_content: "LG Electronics said today it has released its non-fungible token (NFT) platform LG Art Lab, which lets users discover",
    user_id: 3
  },
  {
    title: "House of Dragons and Rings of Power 1st episode for free at least!",
    post_content: "HBO has made the first episode of its Game of Thrones prequel series House of the Dragon available to watch for free on YouTube",
    user_id: 2
  },
  {
    title: "Recommended Glamping Tech: for those fancy outdoorsy nerds",
    post_content: "Apparently, with the right supplies you can have a hot shower with HOTTAP V2.",
    user_id: 3
  },
  {
    title: "Jabra earbuds are cheaper than hearing aids",
    post_content: "I mean why not?",
    user_id: 2
  },
  {
    title: "Recommended to fill 40+% of your viewing field to achieve best video immersion",
    post_content: "I have been feeling this way for years, and the bigger the screens I get, the smaller they end up feeling",
    user_id: 1
  },
  {
    title: "XBOX is ahead of its time",
    post_content: "For the Xbox Series X, like most consoles before it, there remains the question of whether the upgrade is substantial enough to warrant the not inconsiderable cost of entry—$500.",
    user_id: 1
  },
  {
    title: "Tesla is like an iPhone on wheels.",
    post_content: "From the time they hit the mass market nearly a decade ago, Teslas vehicles have garnered reputations as iPhones on wheels.",
    user_id: 3
  },
  {
    title: "Amazon Care is busted.",
    post_content: "Late last month, staffers at Amazon Care — the companys in-person and virtual primary care service.",
    user_id: 4
  },
  {
    title: "Nintendo Switch Games Needed",
    post_content: "Since purchasing the system, I loved BOTW and have been playing Witcher 3 but, where are the big blockbusters????",
    user_id: 2
  },
  {
    title: "Which is better: Mac or PC?",
    post_content: "Sometimes it's good to stir up some grenades.",
    user_id: 3
  },
  {
    title: "Self-Driving cars ned to happen",
    post_content: "If all cars were mandatory self-driving, the speed limit could increase, because the vehicles would be able to communicate. And there wouldn't be a need for slow cars in the left lane.",
    user_id: 3
  },
  {
    title: "Leeloo makup",
    post_content: "Fifth Element was ahead of it's time: how close are we to the instant makup goggles that LeeLoo puts on?",
    user_id: 4
  },
  {
    title: "Air Tags for dog collars",
    post_content: "You can very easily see where your dogs are in real time! Mine do not have a great recall so this has been fantastic when the door was left open and they scatter in all directions.",
    user_id: 2
  },
  {
    title: "Stack Overflow is like redit but also not.",
    post_content: "Stack is a bit difficult sometimes to target what is needed. Not the easiest for newbies either but I guess everyone has to start digging somewhere.",
    user_id: 4
  },
  {
    title: "COVID is finally part of our daily lives like the flu.",
    post_content: "Scientists have a few ideas for how new variants emerge.",
    user_id: 1
  },
  {
    title: "AI learns to play soccer!",
    post_content: "The idea behind the new approach is to get simulated soccer players to learn to play the game the same way humans do—by watching how others do it.",
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
