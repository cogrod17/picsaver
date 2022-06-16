import "./Profile.scss";

import { useAppSelector } from "hooks";
import { userSelector } from "state";

export const Profile = () => {
  const { data } = useAppSelector(userSelector);

  return (
    <div className="profile-wrap">
      <div className="profile-head">
        <span>{data?.username}</span>
      </div>
      <div className="profile-slider">
        <span>Images</span>
        <span>Posts</span>
      </div>
      <div className="profile-content"></div>
    </div>
  );
};
