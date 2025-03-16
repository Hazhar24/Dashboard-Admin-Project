import { DataProfile } from "../../data/DataProfile";
import { DataProfileCard } from "../../datas";

export default function Profile() {
  return (
    <div className="w-full mx-5">
      <p className="profile-p1">{DataProfile.Headline1[0].name}</p>
      <p className="profile-p2">{DataProfile.Headline2[0].name}</p>
      <div className="profile">
        <div className="profile-Specifications">
          <div className="profile-box">
            <div className="profile-card">
              <img
                src={DataProfileCard[0].Avatar}
                alt=""
                className="profile-card-image"
              />
              <div>
                <p>{DataProfileCard[0].userName}</p>
                <p className="text-slate-500">{DataProfileCard[0].name}</p>
              </div>
            </div>
            <p className="profile-card-p">{DataProfileCard[0].followers}</p>
          </div>

          <div className="profile-box">
            <div className="profile-card">
              <img
                src={DataProfileCard[1].Avatar}
                alt=""
                className="profile-card-image"
              />
              <div>
                <p>{DataProfileCard[1].userName}</p>
                <p className="text-slate-500">{DataProfileCard[1].name}</p>
              </div>
            </div>
            <p className="profile-card-p">{DataProfileCard[1].followers}</p>
          </div>

          <div className="profile-box">
            <div className="profile-card">
              <img
                src={DataProfileCard[2].Avatar}
                alt=""
                className="profile-card-image"
              />
              <div>
                <p>{DataProfileCard[2].userName}</p>
                <p className="text-slate-500">{DataProfileCard[2].name}</p>
              </div>
            </div>
            <p className="profile-card-p">{DataProfileCard[2].followers}</p>
          </div>

          <div className="profile-box">
            <div className="profile-card">
              <img
                src={DataProfileCard[3].Avatar}
                alt=""
                className="profile-card-image"
              />
              <div>
                <p>{DataProfileCard[3].userName}</p>
                <p className="text-slate-500">{DataProfileCard[3].name}</p>
              </div>
            </div>
            <p className="profile-card-p">{DataProfileCard[3].followers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
