import * as React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share"
import { ShareIcon } from "@/components/SVGs"
import { IconButton } from "@mui/material"

export default function SharePostLink() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const shareUrl = "http://localhost:3000/project-updates/"
  const title = "Amore homes"
  return (
    <div>
      <IconButton onClick={handleClick}>
        <ShareIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div className="px-2 py-4 grid gap-5 grid-cols-[repeat(auto-fill,_30px)] max-w-[400px] mx-auto">
          <div className="text-center">
            <FacebookShareButton url={shareUrl} className="cursor-pointer">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div className="text-center">
            <FacebookMessengerShareButton
              url={shareUrl}
              appId="521270401588372"
              className="cursor-pointer"
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
          </div>
          <div className="text-center">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="cursor-pointer"
            >
              <XIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className="text-center">
            <TelegramShareButton
              url={shareUrl}
              title={title}
              className="cursor-pointer"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>
          <div className="text-center">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="cursor-pointer"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div className="text-center">
            <LinkedinShareButton url={shareUrl} className="cursor-pointer">
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </div>
      </Menu>
    </div>
  )
}
