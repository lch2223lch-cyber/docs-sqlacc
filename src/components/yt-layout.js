import React from "react";
import { QRCodeGenerator } from "@src/components/qrcode.js";
import { VideoPlayer } from "@src/components/yt-player.js";

export const YtLayout = ({ url, videoId, title }) => {

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", gap: "1rem" }}>
      <VideoPlayer
        videoId={videoId}
        title={title} />

      <QRCodeGenerator url={url} />
    </div>
  );
};