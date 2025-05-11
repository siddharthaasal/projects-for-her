import "./App.css";
import "./index.css"
import { HoverEffect } from "./components/card-hover-effect";

export default function () {
  return (
    <div className="bg-[#f4cdce] min-h-screen">
      <h1 className="text-[#552e42] tracking-wide p-6 underline font-extrabold text-6xl font-cute">Digital Love Letters</h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>

  );
}


export const projects = [
  {
    title: "Dual Wallpapers",
    description:
      "Just a little something to make your screen as beautiful as you. Pick your favorite halves and add a touch of us to everything.",
    link: "https://siddharthaasal.github.io/our-wallpaper/",
  },
  {
    title: "Will You Be Mine?",
    description:
      "I asked, but the ‘No’ button is just too shy to be clicked—because we both know the answer already.",
    link: "https://siddharthaasal.github.io/ask-for-valentine/",
  },
  {
    title: "Hug Me, Teddy",
    description:
      "Here's a teddy to give you all the warm hugs I can't send in person. Happy Teddy Day, cutie!",
    link: "https://siddharthaasal.github.io/teddy-day/",
  },

  {
    title: "A Rose for You",
    description:
      "Whenever you feel down, remember this rose is here for you—just like I’ll always be, no matter what. Happy Rose Day, my love!",
    link: "https://siddharthaasal.github.io/Rose-Day/",
  },
  {
    title: "Mystery of the Moon",
    description:
      "Tap the Moon and watch it get clearer. Sometimes, the best view is the one you didn’t see coming.",
    link: "https://siddharthaasal.github.io/moon-pixels/",
  },
  {
    title: "Happy Birthday, Beautiful!",
    description:
      "Here’s to the birthday girl with all the names! Let’s see how many we can flip through...",
    link: "https://siddharthaasal.github.io/birthday-text-animate/",
  },
];