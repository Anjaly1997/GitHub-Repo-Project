import React, { useState } from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { TbBook, TbBook2 } from "react-icons/tb";
import { FiBox, FiStar } from "react-icons/fi";
import Left from "../components/LeftComponent";
import Overview from "../components/RightComponnet";

function MainSection(): JSX.Element {
 const [totalRepos, setTotalRepos] = useState<number>(0);
 const [avatarUrl, setAvatarUrl] = useState<string>("");
 const [name, setName] = useState<string>("");

 return (
  <div className="profile">
   <nav>
    <div className="profileIcon">
     <TbBook />
     <h2>Overview</h2>
    </div>
    <div className="profileIcon profileIconActive">
     <TbBook2 />
     <h2>
      Repositories <span className="repoNum">{totalRepos}</span>
     </h2>
    </div>
    <div className="profileIcon">
     <AiOutlineInbox />
     <h2>Projects</h2>
    </div>
    <div className="profileIcon">
     <FiBox />
     <h2>Packages</h2>
    </div>
    <div className="profileIcon">
     <FiStar />
     <h2>Stars</h2>
    </div>
   </nav>
   <div className="lineFour"></div>
   <div className="sectionCenter">
    <Left avatarUrl={avatarUrl} name={name} />
    <Overview
     setTotalRepos={setTotalRepos}
     setAvatarUrl={setAvatarUrl}
     setName={setName}
    />
   </div>
  </div>
 );
}

export default MainSection;
