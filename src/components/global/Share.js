import React from "react";
import { useLocation } from "@reach/router";

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

function Share() {
  const location = useLocation();

  return (
    <div className="post-social mt-5 flex text-base max-w-prose mx-auto lg:max-w-none">
      <dl className="space-y-2 lg:gap-8">
        <dt className="text-base text-rtSecondary">
          <span>Compartir:</span>
        </dt>
        <dd className="flex text-base gap-2 mt-0 pt-0">
          <FacebookShareButton url={location.href}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={location.href}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton url={location.href}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <TelegramShareButton url={location.href}>
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
          <EmailShareButton url={location.href}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </dd>
      </dl>
    </div>
  );
}

export default Share;
