
import Tagscloud from '../Tagscloud/Tagscloud';
import "./Header.scss"

function Header() {
return (
<>
  
<header>
  <div className="container">
      <div className="row justify-content-center">
       <h1>h1. Boostrap heading</h1>
       </div>
       <div className="row justify-content-center">
       <p>Lead paragraph. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
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