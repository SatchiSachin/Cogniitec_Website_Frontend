import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdShare } from "react-icons/md";

const ShareSection = ({ slug, title }) => {
  const [copied, setCopied] = useState(false);

  if (!slug) return null;

 
  const blogUrl = `${window.location.origin}/blogdetails/${slug}`;

  const encodedUrl = encodeURIComponent(blogUrl);
  const encodedTitle = encodeURIComponent(title || "Check out this blog!");

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const openPopup = (url) => {
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=600");
  };

 
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(blogUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  
  const handleNativeShare = async () => {
    if (!navigator.share) {
      alert("Your browser does not support direct share. Use Copy Link.");
      return;
    }

    await navigator.share({
      title: title || "Blog",
      text: title || "Check out this blog!",
      url: blogUrl,
    });
  };

  return (
    <div className="w-full px-4">
      <div className="w-full rounded-xl py-6 px-6 flex flex-col md:flex-row gap-4 md:gap-0 md:items-center md:justify-between bg-gradient-to-r from-[#e52d27] to-[#ff512f]">
        <p className="text-white text-lg font-medium text-center md:text-left">
          Like what you see? Share with a friend.
        </p>

        <div className="flex items-center justify-center md:justify-end gap-4 flex-wrap">
    
          <button
            onClick={() => openPopup(shareLinks.facebook)}
            className="w-9 h-9 rounded-md bg-white flex items-center justify-center shadow hover:scale-105 transition cursor-pointer"
          >
            <FaFacebookF className="text-[#e52d27] text-lg" />
          </button>

        
          <button
            onClick={() => openPopup(shareLinks.twitter)}
            className="w-9 h-9 rounded-md bg-white flex items-center justify-center shadow hover:scale-105 transition cursor-pointer"
          >
            <FaXTwitter className="text-[#e52d27] text-lg" />
          </button>

          
          <button
            onClick={() => openPopup(shareLinks.linkedin)}
            className="w-9 h-9 rounded-md bg-white flex items-center justify-center shadow hover:scale-105 transition cursor-pointer"
          >
            <FaLinkedinIn className="text-[#e52d27] text-lg" />
          </button>

          
          <button
            onClick={handleCopyLink}
            className="w-9 h-9 rounded-md bg-white flex items-center justify-center shadow hover:scale-105 transition cursor-pointer"
          >
            <FaLink className="text-[#e52d27] text-lg" />
          </button>

         
          <button
            onClick={handleNativeShare}
            className="w-9 h-9 rounded-md bg-white flex items-center justify-center shadow hover:scale-105 transition cursor-pointer"
          >
            <MdShare className="text-[#e52d27] text-xl" />
          </button>
        </div>
      </div>

      {copied && (
        <p className="text-green-600 text-sm mt-2 text-center">
          ✅ Link copied!
        </p>
      )}

      <div className="w-full border-b mt-4" />
    </div>
  );
};

export default ShareSection;
