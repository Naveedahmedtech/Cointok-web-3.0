import React from "react";
import Text from "../../../components/text/Text";

const NewsLetter = () => {
  return (
    <div className="bg-secondary">
      <div className="text-center mt-10 p-16">
        <Text className="text-4xl text-text-light mb-12">
          Join our newsletter to follow our news
        </Text>
        <div className="flex justify-center items-center flex-wrap gap-2 ">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent w-full max-w-md"
            aria-label="Email address"
          />
          <button
            className="bg-text-primary hover:opacity-50 text-text-light font-bold py-2 px-6 rounded-lg transition-colors duration-150"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
