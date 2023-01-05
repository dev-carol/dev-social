import "./styles.css";

const NotFoundPage = () => {
  return (
    <>
      <section className="page-404">
        <div className="container-page-404">
          <div className="img-batman"></div>
          <div className="text-page-404">
            <h2>404, Hey Dev!</h2>
            <span>Essa página não foi encontrada!</span>
            <p>Salve sua vida apertando no botão abaixo: </p>
            <div>
              <a className="link_404" href="/">
                Voltar para home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
