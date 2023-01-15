
import Navbar from "../../components/Navbar/Navbar/Navbar";
import UserNameLarge from "../../components/User/userNameLarge";
import { FeedCardList } from "../../components/Feed/FeedCardList";

const FeedPage = () => {

  return (
    <>
       <Navbar
        links={[
          { label: 'Início', href: '/' },
          { label: 'Explorar', href: '/explorar' },
        ]}
      />
      <section className="w-full max-w-5xl py-12 m-auto grid grid-cols-1 lg:grid-cols-[1fr,380px]">
        <section className="w-full ">
          <FeedCardList list={new Array(5).fill({
            userName: 'Batman',
            userSrc: '../src/assets/img/avatarbatman.jpg',
            defaultLiked:false,
            likesCount: 100,
            feedSrc: '../src/assets/img/fotofeedbatman1.png',
            description: "Hey,Dev. O Batman está de volta! Estou esperando o seu like para esse projeto"
          })}/>
        </section>

        <section className="">
        <UserNameLarge name= "Batman"userName="batmanoffical" onClick={() => {}}/>
        </section>
      </section>
    </>
  );
};

export default FeedPage;
