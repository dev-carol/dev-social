
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
            userSrc: 'https://thumbs.dreamstime.com/b/%C3%ADcone-de-cor-plana-vetor-bateria-batman-para-design-site-e-envelope-desktop-desenvolvimento-pacote-premium-167467499.jpg',
            defaultLiked:false,
            likesCount: 100,
            feedSrc: 'https://miro.medium.com/max/1400/0*dbnhwFZg4GD3O2jj.jpg',
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
