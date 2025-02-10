import React, { useState, useEffect, useRef } from 'react';

const Webframe = ({ wurl }) => {
  const [dimensions, setDimensions] = useState({ height: '250px', width: '100%' });
  const iframeRef = useRef(null);

  useEffect(() => {
    const adjustDimensions = () => {
      if (iframeRef.current) {
        const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        if (iframeDocument) {
          setDimensions({
            height: iframeDocument.body.scrollHeight + 'px',
            width: iframeDocument.body.scrollWidth + 'px'
          });
        }
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', adjustDimensions);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', adjustDimensions);
      }
    };
  }, [wurl]);

  const handleClick = () => {
    window.open(wurl, '_blank');
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-700" style={{ height: dimensions.height, width: dimensions.width }}>
      <iframe
        ref={iframeRef}
        src={wurl}
        className="w-full h-full rounded-xl pointer-events-none"
        style={{ height: dimensions.height, width: dimensions.width }}
      ></iframe>
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Webframe;