export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;
  const createdDate = new Date(created_at);
  return (
    <div className="user_card">
      <div className="details">
        <div className="intro">
          <img src={avatar_url} alt="avatar" className="avatar" />
          <a href={`https://github.com/${login}`} target="_blank">
            {name || login}
          </a>
          <p>
            User joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>

        <div className="box_container">
          <div className="box">
            <h3 className="heading">Public repos</h3>
            <span>{public_repos}</span>
          </div>
          <div className="box">
            <h3 className="heading">Followers</h3>
            <span>{followers}</span>
          </div>
          <div className="box">
            <h3 className="heading">Folowings</h3>
            <span>{following}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
