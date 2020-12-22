import { useEffect, useState } from "react";
import { fetchRandomData } from "../../utils/clients/random-user";

interface UserName {
  first: string;
  last: string;
  title: string;
}

interface UserPicture {
  thumbnail: string;
}

interface UserInfo {
  name: UserName;
  picture: UserPicture;
}

/**
 * Provides a list of users. The list can be incremented and reset.
 * 
 * https://www.youtube.com/watch?v=gnkrDse9QKc
 */
export default function UserData() {
  const [userInfos, setUserInfos] = useState([] as UserInfo[]);
  const [nextPageNumber, setNextPageNumber] = useState(0);

  // Add the next user to the list.
  const fetchNextUser = () => {
    fetchRandomData(nextPageNumber).then((randomData) => {
      if (randomData.results === undefined) { return null; }
      const newUserInfos = [
        ...userInfos,
        ...randomData.results
      ]
      setUserInfos(newUserInfos);
      setNextPageNumber(randomData.info + 1)
    });
  };

  useEffect(() => {
    fetchNextUser();
  }, []);

  const getFullUserName = (userInfo: UserInfo) => {
    const {
      name: { first, last },
    } = userInfo;
    return `${first} ${last}`;
  };

  return (
    <div className="UserData">
      <button
        onClick={() => {
          setUserInfos([]);
        }}
        >
        New List
      </button>
      <button
        onClick={() => {
          fetchNextUser();
        }}
      >
        Add User
      </button>
      {userInfos.map((userInfo, idx) => (
        <div key={idx}>
          <p>{getFullUserName(userInfo)}</p>
          <img src={userInfo.picture.thumbnail} alt="thumbnail" />
        </div>
      ))}
    </div>
  );
}
