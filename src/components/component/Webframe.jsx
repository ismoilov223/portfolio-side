import React, { useState, useEffect, useRef } from 'react';

const Webframe = ({ wurl }) => {
  const [dimensions, setDimensions] = useState({ height: '250px', width: '100%' });
  const [screenshotUrl, setScreenshotUrl] = useState(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    // Fetch a screenshot of the website using an external API
    const fetchScreenshot = async () => {
      try {
        const apiKey = 'YOUR_SCREENSHOT_API_KEY'; // Replace with your Screenshot API key
        const response = await fetch(
          `https://api.screenshotapi.net/screenshot?token=${apiKey}&url=${encodeURIComponent(wurl)}&width=1280&height=720`
        );
        const data = await response.json();
        setScreenshotUrl(data.screenshot);
      } catch (error) {
        console.error('Error fetching screenshot:', error);
      }
    };

    fetchScreenshot();
  }, [wurl]);

  const handleClick = () => {
    window.open(wurl, '_blank');
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-gray-700"
      style={{ height: dimensions.height, width: dimensions.width }}
    >
      {screenshotUrl ? (
        <img
          src={screenshotUrl}
          alt="Website Screenshot"
          className="w-full h-full rounded-xl"
          style={{ height: dimensions.height, width: dimensions.width }}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-200">
          Loading screenshot...
        </div>
      )}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Webframe;