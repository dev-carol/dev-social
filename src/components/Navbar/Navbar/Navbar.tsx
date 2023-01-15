
import { Link, useNavigate } from 'react-router-dom';
import { IUser } from '../../../interfaces/user';
import Logo from '../../../components/Logo/Logo';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import UserNameSmall from '../../../components/User/userNameSmall';
import Button  from '../../../components/Button/Button';
import { useState } from 'react';



type Props = {
  links: { label: string; href: string }[];
  user?: IUser;
};

const Navbar = ({
  links,
  user = {id:'1', username:"batman"} ,
}: Props) => {
  const navigate = useNavigate();
  return (
    <nav className=" w-full h-20 bg-neutral-800 shadow-md">
      <div className="w-full h-full m-auto max-w-5xl flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex items-center justify-center gap-4">
          <NavbarLinks items={links} />
          {user ?(
            <>
              <UserNameSmall
                userName={user.username}
                onClick={() => navigate(`/profile/${user.username}`)}
              />
              <Button onClick={() => navigate('/new/post')}>
                Criar novo post
              </Button>
            </>
          ) : (
            <Button onClick={() => navigate('/create-account')}>
              Criar nova conta
            </Button>
          )}
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
