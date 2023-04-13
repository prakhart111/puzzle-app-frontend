import React from "react";
import { AvatarCard as Card } from "./AvatarCard.jsx";
import { avatarList } from "../avatarList.js";

function AvatarSelector({ selected, setSelected}) {


  const handleItemClick = (avatarLink) => () => {
    setSelected(selected !== avatarLink ? avatarLink : "");
  };

  return (
    <>
      <div style={{ paddingTop: "80px" }}>
        <div>
            {avatarList.map( (avatar) => (
              <Card
                link={avatar}
                key={avatar}
                onClick={handleItemClick(avatar)}
                selected={avatar === selected}
              />
            ))}
        </div>
      </div>
    </>
  );
}
export default AvatarSelector;




