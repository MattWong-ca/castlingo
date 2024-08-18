# 🦉 Castlingo
Demo video: [link](https://youtu.be/NxvTi5mbbgo)
<br/>
DoraHacks: [link](https://dorahacks.io/buidl/14840)

<img width="894" alt="about" src="https://github.com/user-attachments/assets/5125596f-ab96-47b1-8938-5feef96ee5ce">

# 🗣️ About
AI-powered Chrome extension for learning new languages on the Farcaster client, Warpcast. 

This is the first language-learning app native to Warpcast and introduces a gamification element that brings more people onchain. The quiz questions and learning content are AI-powered, so it can adapt to different users' individual learning styles. It also works for any language!

Most importantly, this app provides a **real-world** learning experience! Traditional language-learning apps drill you with generic vocabulary and basic sentences. With Castlingo, we provide a more realistic and practical approach by directly translating text that people wrote! Learning from these translations gives a better background of words and phrases you'll actually use, especially crypto-native terms since it's on Warpcast!

<img width="817" alt="Screenshot 2024-08-18 at 6 45 06 PM" src="https://github.com/user-attachments/assets/e8a94005-02b3-4a77-95bc-f9b84de2fdbb">
<img width="817" alt="Screenshot 2024-08-18 at 6 45 25 PM" src="https://github.com/user-attachments/assets/4dd0877c-21f7-4a64-8714-d0f032e30709">

# 📝 Setup
1. In terminal, `git clone https://github.com/MattWong-ca/castlingo.git`
2. Head to `chrome://extensions/` on Chrome
3. Turn on `Developer mode` (top right)
4. Click `Load unpacked` (top left)
5. Click on /castlingo --> /extension --> /out, and select the `out` folder
6. Extension should be installed! Pin it and head to a Warpcast cast (eg. [this one](https://warpcast.com/rish/0x5f1214ca))
7. Click the extension, and start learning!

# 🛠️ Tech Stack
➔ Chrome API: fetches the current tab's URL

➔ Neynar API: fetches a cast's text given a URL input

➔ OpenAI API: returns a JSON object of the translation, definitions, and quiz questions given the cast's text

➔ Next.js: game logic, UI states, and general functionality of the extension

➔ MicroGPT: VS Code extension used to enhance workflow + improve code quality

I used this [starter template](https://github.com/ibnzUK/next-chrome-starter) for the Next.js extension. This [blog](https://nextjsstarter.com/blog/nextjs-chrome-extension-a-developers-guide/) provides a good overview of how to get started. This [intro](https://www.youtube.com/watch?v=FENxgQ58JSE) video and this [content scripts + service workers](https://www.youtube.com/watch?v=OfNL9e-u8xU) video were both very useful.

<img width="894" alt="howitworks" src="https://github.com/user-attachments/assets/20e75f2d-3c63-4e9a-91ad-316dd6d75064">

MicroGPT's VS Code extension was used to speed up the workflow and enhance code quality. Whenever I saved my code, it would automatically show me potential errors and an improved version, which helped me avoid errors and reduced the length of my code. In the example below, it reminded me that I should check if a variable is undefined before proceeding to manipulate it.
<img width="1440" alt="microgpt1" src="https://github.com/user-attachments/assets/b409b2e5-2340-44b5-94af-b4edf57d6ce1">

# 🗺️ Road Map
1. Farcaster-native experience: leverage Farcaster frames + cast actions so users don't have to install another extension, making the entire experience in-app. This also opens up the game to both web and mobile users.
2. Leaderboard: gamify the experience with a social aspect by introducing a leaderboard where users can compete with points + streaks.
3. Onchain rewards: win NFTs + USDC for streaks + points, and compete or bet against against friends to earn more rewards. This introduces a viral loop to get more users.

<img width="894" alt="roadmap" src="https://github.com/user-attachments/assets/e926f9ff-a84c-439e-a0ce-e6b448924bc7">
