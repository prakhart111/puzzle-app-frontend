import React from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu'
import { avatarList } from '../avatarList'

export const AvatarCard = ({link,onClick,selected}) => {
    return (
    <div
      onClick={() => onClick()}
      role="button"
      style={{
        width: "fit-content",
        height: "fit-content",
        display: "inline-block",
        margin: "0 20px",
        userSelect: "none",
        boxShadow: selected ? "0 15px 6px -8px #E23636" : "",
      }}
      tabIndex={0}
      className=""
    >
        <img
            src={link}
            width="100px"
            height="100px"
            alt=" "
            style={{
            transition: "all 0.3s ease-out",
            transform: selected ? "scale(1.4)" : "scale(0.7)",
            opacity: selected ? 1 : 0.7,
            }}
        />
    </div>
    )
}