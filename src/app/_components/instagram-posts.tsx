"use client";

import Script from "next/script";
import React from "react";

export default function InstagramPosts() {
  React.useEffect(() => {
    const interval = setInterval(() => {
      const link = document.querySelector<HTMLElement>(
        'a[href*="elfsight.com/instagram-feed-instashow"]',
      );
      if (link) {
        link.style.setProperty("display", "none", "important");
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      />
      <div
        className="elfsight-app-16b4e4ef-598e-4bd7-a1aa-a250e8cc0f7e"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}
