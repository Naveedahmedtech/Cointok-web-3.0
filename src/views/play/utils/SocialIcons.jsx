import insta from "../../../assets/socials/instagram-fill.png";
import twitch from "../../../assets/socials/twitch-fill.png";
import twitter from "../../../assets/socials/twitter-fill.png";
import unknown from "../../../assets/socials/unknow-fill.png";
import discord from "../../../assets/socials/discord-fill.png";
import { Link } from "react-router-dom";

const socialImages = [insta, twitch, twitter, discord, unknown];

const SocialIcons = () => {
  return (
    <Link
      to=""
      className="flex justify-center items-center flex-wrap gap-5 my-10 py-5"
    >
      {socialImages.map((image) => (
        <img src={image} alt="" className="w-auto h-12" />
      ))}
    </Link>
  );
};

export default SocialIcons;
