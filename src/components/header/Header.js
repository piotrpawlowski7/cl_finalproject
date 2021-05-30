
import Tagscloud from '../Tagscloud/Tagscloud';
import "./Header.scss"

function Header() {
return (
<>
  
<header>
  <div className="container">
      <div className="row justify-content-center">
       <h1>Site Finder</h1>
       </div>
       <div className="row justify-content-center">
       <p className="text-center">Dedykowane narzędzie do wyszukiwania customowych oraz natywnych rozwiązań możliwych do zaimplementowania w obrębie realizowanych przez nas stron.<br/>
         Narzędzie ma na celu wsparcie w kreacji, dopasowaniu odpowiedniej formy do przygotowanej treści. <br/>
         Agregujemy tu sprawdzone i powtarzalne implementacje. Dokumentujemy.</p>
       </div>
      </div>
      </header>
      <section className="header__tagscloud">
      <Tagscloud></Tagscloud>
      </section>
</>
);
}

export default Header;