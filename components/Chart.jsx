'use client'
import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "enable_publishing": false,
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "gridColor": "rgba(0, 0, 0, 0.06)",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "withdateranges": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);

    return () => {
      const currentContainer = container.current; // Store the current value of the ref
      if (currentContainer) {
        currentContainer.removeChild(script); // Use the variable in cleanup
      }
    };
  }, []);

  return (
    <div className='w-auto h-[20rem] sm:h-[28rem]'>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <style jsx>{`
          .tradingview-widget-container iframe {
            border: none !important;
          }
        `}</style>
      </div>
    </div>
  );
}

export default TradingViewWidget;
