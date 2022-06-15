import "./Profile.scss";

import { useAppSelector } from "hooks";
import { userSelector } from "state";

export const Profile = () => {
  const { data } = useAppSelector(userSelector);

  return (
    <div className="profile-wrap">
      <div className="profile-head">{data?.username}</div>
      <div className="profile-slider"></div>
      <div className="profile-content"></div>
    </div>
  );
};
