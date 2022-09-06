const { Post } = require('../models');

const postData = [
  {
    title: "This is how it starts: SKYNET",
    post_content: "The Georgia Institute of Technology has been awarded a $65 million grant from the U.S. Department of Commerce’s Economic Development Administration (EDA) to support a statewide initiative that combines artificial intelligence and manufacturing innovations with transformational workforce and outreach programs. The grant will increase job and wage opportunities in distressed and rural communities, as well as among historically underrepresented and underserved groups. https://news.gatech.edu/news/2022/09/02/economic-development-administration-awards-georgia-tech-65-million-ai-manufacturing",
    user_id: 10
  },
  {
    title: "Using decades-old tech in today's weapons: Russia's powerful facade, weak under the serface.",
    post_content: "Investigators who examined the electronics in Russia’s newest cruise missiles and attack helicopters were surprised to find decades-old technology reused from earlier models. The report undercuts Moscow’s narrative of having a domestically rebuilt military that again rivals that of its Western adversaries. But it also shows that the weapons Russia is using to destroy Ukrainian towns and cities are often powered by Western innovation, despite sanctions imposed against Russia after it invaded Crimea in 2014. Those restrictions were intended to stop the shipment of high-tech items that could help Russia’s military abilities. https://www.nytimes.com/2022/09/04/us/politics/russia-missiles-ukraine.html",
    user_id: 8
  },
  {
    title: "Tech-powered protein harvest. Sounds like Bit Byte material!",
    post_content: "Finnish industrial biotech startup Solar Foods is working on bringing a novel protein to market: a nutritious, sustainable alternative to animal-derived proteins. The product, a single cell protein it’s branding, Solein, is essentially an edible bacteria; a single cell microbe grown using gas fermentation. Or, put another way, they’re harvesting edible calories from hydrogen-oxyidizing microbes. Technically it’s like a brewery, explains CEO and co-founder Dr Pasi Vainikka in an interview with TechCrunch. Like fermentation technologies are. It’s not that strange [a process] — there is this one difference, which is the feedstock. https://techcrunch.com/2022/09/05/solar-foods-solein/",
    user_id: 1
  },
  {
    title: "Shifting tech away from China",
    post_content: "China and Google are starting to move manufacturing SLOWLY out of China (A very small portion of Apple’s latest iPhones will be made in India, and part of Google’s newest Pixel phone production will be done in Vietnam.) https://www.nytimes.com/2022/09/01/business/tech-companies-china.html",
    user_id: 4
  },
  {
    title: "A platform to buy and sell digital artwork",
    post_content: "LG Electronics said today it has released its non-fungible token (NFT) platform LG Art Lab, which lets users discover, buy, sell and trade NFTs on LG’s smart TVs. The announcement comes roughly eight months after LG Electronics said at its press conference that it plans to incorporate NFT features into its smart TV. https://techcrunch.com/2022/09/04/lg-electronics-launches-nft-platform-that-lets-users-buy-and-sell-digital-artwork/",
    user_id: 7
  },
  {
    title: "House of Dragons and Rings of Power 1st episode for free at least!",
    post_content: "HBO has made the first episode of its Game of Thrones prequel series House of the Dragon available to watch for free on YouTube, a marketing move that amusingly coincides with the release of Amazon Prime’s The Lord of the Rings: The Rings of Power on Friday last week. https://www.theverge.com/2022/9/5/23337730/watch-house-of-the-dragon-free-youtube-now-hbo-max",
    user_id: 4
  },
  {
    title: "Recommended Glamping Tech: for those fancy outdoorsy nerds",
    post_content: "Apparently, with the right supplies you can have a hot shower with HOTTAP V2. The Coleman SKYDOME tent has dark-tech to keep the sun from rising. The truck tent goes, well... in the bed of the truck! But that sound pretty helpful. And to cook, the Camp Chef Everest 2X, because cooking like you're camping just isn't like home! https://www.usatoday.com/story/tech/2022/09/02/best-glamping-camping-tech/7971473001/",
    user_id: 1
  },
  {
    title: "Jabra earbuds are cheaper than hearing aids",
    post_content: "I mean why not? https://www.reviewed.com/accessibility/content/jabra-enhance-plus-review-hearing-aid-price-worth-quality?utm_source=usat&utm_medium=referral&utm_campaign=collab",
    user_id: 1
  },
  {
    title: "Recommended to fill 40+% of your viewing field to achieve best 'video immersion'",
    post_content: "I have been feeling this way for years, and the bigger the screens I get, the smaller they end up feeling (or is it just commercialism!) But, I feel the vibes of this article. https://www.reviewed.com/televisions/features/5-benefits-of-gaming-on-a-big-screen-tv?utm_source=usat&utm_medium=referral&utm_campaign=collab",
    user_id: 9
  },
  {
    title: "XBOX is ahead of its time",
    post_content: "For the Xbox Series X, like most consoles before it, there remains the question of whether the upgrade is substantial enough to warrant the not inconsiderable cost of entry—$500. I'm not about to say this product isn't worth every penny of its $500 price tag: it is, without a doubt, more powerful than the average gamer will be able to even take advantage of (more on that below). What I'm puzzling over is who should spend that kind of money at this point in the Series X's life cycle. https://www.reviewed.com/home-theater/content/xbox-series-x-review",
    user_id: 5
  },
  {
    title: "Tesla is like an ‘iPhone on wheels.’",
    post_content: "From the time they hit the mass market nearly a decade ago, Tesla’s vehicles have garnered reputations as “iPhones on wheels,” a revolutionary technological leap that did for cars what Apple’s smartphone did for consumer tech. They offered large touch screens, a vast charging network and groundbreaking performance that delivered on the dream of electrification seemingly without compromise, where competing products failed to stitch all aspects of that formula into one. https://www.washingtonpost.com/technology/2021/05/14/tesla-apple-tech/",
    user_id: 3
  },
  {
    title: "Amazon Care is busted.",
    post_content: "Late last month, staffers at Amazon Care — the company’s in-person and virtual primary care service — were called into a meeting and given bad news: Amazon was shutting it down. Some employees were let go immediately. Others walked out. Everyone was promised paychecks through the end of December. https://www.washingtonpost.com/technology/2022/09/04/amazon-care-health-one-medical/",
    user_id: 10
  },
  {
    title: "Nintendo Switch Games Needed",
    post_content: "Since purchasing the system, I loved BOTW and have been playing Witcher 3 but, where are the big blockbusters????",
    user_id: 8
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
    user_id: 7
  },
  {
    title: "Air Tags for dog collars",
    post_content: "You can very easily see where your dogs are in real time! Mine do not have a great recall so this has been fantastic when the door was left open and they scatter in all directions.",
    user_id: 6
  },
  {
    title: "Stack Overflow is like redit but also not.",
    post_content: "Stack is a bit difficult sometimes to target what is needed. Not the easiest for newbies either but I guess everyone has to start digging somewhere.",
    user_id: 4
  },
  {
    title: "COVID is finally part of our daily lives like the flu.",
    post_content: "Scientists have a few ideas for how new variants emerge. One involves people with persistent infections — people who test positive for the virus over a prolonged period of time. I’m going to tell you about the curious case of a person infected with SARS-CoV-2 for at least 471 days and what can happen when infections roil away uncontrolled. https://www.sciencenews.org/article/covid-infection-471-days-coronavirus-evolution-variants",
    user_id: 6
  },
  {
    title: "AI learns to play soccer!",
    post_content: "The idea behind the new approach is to get simulated soccer players to learn to play the game the same way humans do—by watching how others do it. It also involved starting from pretty much ground zero. The simulated players first had to learn how to walk, then to run and kick a ball around. At each new level, the AI systems were shown video of real-world soccer players, which allowed them to learn not just the basics of soccer playing, but to mimic the way professional athletes move as they engage in high level sporting events. https://techxplore.com/news/2022-09-ai-soccer.html",
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
