import classNames from "classnames";

type Props = {
  onClick?: VoidFunction;
  userName: string;
  name: string;
  src?: string;
  postsCount?: number;
  followersCount?: number;
  followingCount?: number;
  biography?: string;
};
const UserDetailed = ({
  userName,
  name,
  src = "../src/assets/img/avatarbatman.jpg",
  postsCount = 0,
  followersCount = 0 ,
  followingCount = 0,
  biography,
  onClick,
}: Props) => {
  return (
    <div
    className={classNames(
      'flex flex-col lg:flex-row items-center justify-center gap-10 max-w-2xl',
      { 'cursor-pointer': !!onClick }
    )}
    onClick={onClick}
  >
    <img
      src={src}
      alt={userName}
      className="w-[150px] h-[150px] rounded-[150px]"
    />
    <div>
      <p className="pb-3 text-center lg:text-left text-2xl">{userName}</p>
      <div className="pb-3 gap-4 flex items-center justify-center lg:justify-start">
        <p className="text-lg">
          <strong>{postsCount}</strong> Posts
        </p>
        <p className="text-lg">
          <strong>{followersCount}</strong> Seguidores
        </p>
        <p className="text-lg">
          <strong>{followingCount}</strong> Seguindo
        </p>
      </div>
      <p className="text-center lg:text-left font-bold text-xl leading-4 pb-3">{name}</p>
      <p className="leading-5">{biography}</p>
    </div>
  </div>
  );
};

export default UserDetailed;
