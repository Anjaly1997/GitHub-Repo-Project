import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface RightCompProps {
 setTotalRepos: React.Dispatch<React.SetStateAction<number>>;
 setAvatarUrl: React.Dispatch<React.SetStateAction<string>>;
 setName: React.Dispatch<React.SetStateAction<string>>;
}

function RightComponnet({
 setTotalRepos,
 setAvatarUrl,
 setName,
}: RightCompProps) {
 const [repos, setRepos] = useState<any[]>([]);
 const [searchTerm, setSearchTerm] = useState<string>("");

 useEffect(() => {
  fetch("https://api.github.com/users/github/repos")
   .then((response) => response.json())
   .then((data) => {
    setRepos(data);
    setTotalRepos(data.length);
   })
   .catch((error) => {
    console.error("Error fetching data: ", error);
   });

  fetch("https://api.github.com/users/github")
   .then((response) => response.json())
   .then((data) => {
    setAvatarUrl(data.avatar_url);
    setName(data.name);
   })
   .catch((error) => {
    console.error("Error fetching data: ", error);
   });
 }, []);

 const filteredRepos = repos.filter((repo) =>
  repo.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

 const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
 };

 return (
  <div className="overview">
   <div className="searchContainer">
    <div>
     <input
      type="text"
      placeholder="Find a Repository....."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
     />
    </div>
    <div className="rightButtons">
     <div className="rightButton">
      <button>
       Type <IoMdArrowDropdown />
      </button>
     </div>
     <div className="rightButtons">
      <button>
       Language <IoMdArrowDropdown />
      </button>
     </div>
     <div className="rightButtons">
      <button>
       Sort <IoMdArrowDropdown />
      </button>
     </div>
    </div>
   </div>
   <div className="repositories">
    <div className="repositoriesTitle">
     <h2>Popular repositories</h2>
    </div>
    <div className="repositoriesContainer">
     {filteredRepos.map((repo, idx) => (
      <div className="repositoriesBox" key={idx}>
       <div className="repositoriesTop">
        <h3>{repo.name}</h3>
        <p>{repo.visibility}</p>
       </div>
       <div className="repositoriesDescription">
        <p>{repo.description}</p>
       </div>
       <div className="repositoriesBottom">
        <p>{repo.language}</p>
        <p className="date">Last updated on {formatDate(repo.updated_at)}</p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default RightComponnet;
