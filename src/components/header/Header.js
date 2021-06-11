import Tagscloud from "../Tagscloud/Tagscloud";
import "./Header.scss";

function Header() {
  return (
    <>
      <header>
        <div className="header_container">
          <div className="container">
            <div className="row">
              <h1>Hi, I'm Sofia.</h1>{" "}
              <h4>(Aspiring to be smart) Solution Finder</h4>
            </div>
            <div className="row">
              <p className="text-left" style={{ width: "700px" }}>
                Dedykowane narzędzie do wyszukiwania customowych oraz natywnych
                rozwiązań możliwych do zaimplementowania na tworzonych stronach.
                Narzędzie ma na celu wsparcie w kreacji, dopasowaniu
                odpowiedniej formy do przygotowanej treści. <br />
              </p>
            </div>
          </div>

          <section className="header__tagscloud">
            <Tagscloud></Tagscloud>
          </section>
        </div>
      </header>
    </>
  );
}

export default Header;
