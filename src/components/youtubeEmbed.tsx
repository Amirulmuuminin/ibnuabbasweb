import React from "react";
import PropTypes from "prop-types";
import { Card } from "./ui/card";

const YoutubeEmbed = ({ embedId }: { embedId: String }) => (
  <Card className=" w-full p-2 md:p-4">
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </Card>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
