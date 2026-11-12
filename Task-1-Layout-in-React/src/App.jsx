
/*
 ERASED TAPES - COMPLETE React JSX
  ------------------------
  This file uses JSX to build and organise the
  website's layout and content using React components.
*/

// Import the images and icons used throughout the website.
import logo from '../assets/logo.svg'
import allEncores from '../assets/all-encores.jpg'
import articulation from '../assets/articulation.jpg'
import blurred from '../assets/blurred.jpg'
import encores2 from '../assets/encores-2.jpg'
import eulogy from '../assets/eulogy-for-evolution.jpg'
import profilePicture from '../assets/profile_picture.jpg'
import facebookIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import './App.css'

// Reusable navigation links that jump to sections of this page.
function Navigation() {
  return (
    <nav className="site-navigation" aria-label="Main navigation">
      <a href="#article">Our Blog</a>
      <a href="#albums">Our Artists</a>
      <a href="#author">Our Story</a>
    </nav>
  )
}

// Displays the site logo and the main navigation at the top of the page.
function Header() {
  return (
    <header className="site-header">
      <img
        src={logo}
        alt="Erased Tapes Records logo"
        className="site-logo"
      />
      <Navigation />
    </header>
  )
}

// Introduces the record label with the page title and opening paragraph.
function Introduction() {
  return (
    <section className="introduction">
      <h1>Erased Tapes:</h1>
      <h2>Exploring the Sonic Frontier</h2>

      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit.
        Mi eu scelerisque turpis posuere tempor? Leo
        condimentum himenaeos molestie elit; maximus
        iaculis proin nulla. Ullamcorper nibh cras conubia
        suscipit dapibus sagittis, facilisi habitant
        vivamus. Etiam fusce posuere himenaeos ipsum
        commodo sollicitudin himenaeos nec.
      </p>
    </section>
  )
}

// Contains the main blog article, divided into headings and paragraphs.
function ArticleContent() {
  return (
    <section className="article-content">
      <div className="article-flow">
        <h2>Heading</h2>

        <p>
          Montes ridiculus mus tellus nunc vulputate.
          Cras facilisi congue et facilisis porttitor
          litora etiam praesent porttitor. Sollicitudin
          cubilia scelerisque diam taciti lacus.
          Dapibus penatibus augue dapibus sagittis;
          rhoncus accumsan. Accumsan urna et, ultrices
          placerat justo rutrum. Tristique mattis ante
          cras accumsan convallis phasellus fermentum
          magna. Rhoncus curabitur pharetra proin ante
          nam adipiscing accumsan hac. Rutrum efficitur
          nullam integer ut ex id. Pulvinar vel at
          vestibulum vivamus sed nascetur eget.
        </p>

        <p>
          Laoreet volutpat hendrerit est aliquam; fusce
          quam tempor. Nisi interdum praesent
          pellentesque non non blandit cubilia et.
          Aptent maximus vehicula nullam odio tempor.
          Placerat dis facilisis potenti iaculis, primis
          vivamus nec at magnis. Aadipiscing curabitur
          vestibulum imperdiet dolor primis. Inceptos
          penatibus inceptos eu habitasse aptent vehicula
          platea litora congue. Ultricies mauris
          fringilla rhoncus pharetra iaculis vitae.
          Venenatis himenaeos eget molestie dignissim
          consectetur tellus litora. Porta a iaculis
          mi primis rhoncus.
        </p>

        <p>
          Curae habitasse elementum amet nunc, natoque
          at. Tortor vel blandit sociosqu auctor aliquam
          maximus porta feugiat. Eros phasellus platea
          mauris condimentum natoque hendrerit tellus
          id. Ex imperdiet vitae maximus adipiscing
          neque quam tempor orci. Lobortis porta lacinia
          cubilia tellus vel placerat; facilisis mi
          euismod. Neque eu orci nulla penatibus elit
          nec.
        </p>

        <p>
          Parturient habitasse facilisis purus donec,
          enim platea maximus. Primis class varius augue
          sed class ultricies. Posuere curabitur
          tristique penatibus montes hac ac imperdiet.
          Risus per sociosqu, cursus leo condimentum
          ac fringilla. Nibh curabitur eros tempus nec;
          nam curae hendrerit. Mattis placerat maximus
          mollis praesent, eros adipiscing dui.
        </p>

        <h2>Heading</h2>

        <p>
          Habitasse ornare fames facilisis montes
          pulvinar habitasse fringilla. Risus porta
          cursus duis vivamus quam adipiscing nec.
          Ante at posuere eget aptent natoque vivamus
          ante. Aenean enim dapibus viverra sem
          efficitur. Felis nam semper integer justo in.
          Facilisi augue urna torquent lacinia facilisi
          inceptos. Natoque varius feugiat massa
          scelerisque natoque, cras tempor inceptos.
        </p>

        <p>
          Amet ac leo, imperdiet hac litora auctor.
          Suscipit congue duis sociosqu auctor euismod
          vivamus urna diam. Nunc enim himenaeos litora
          facilisi, tincidunt torquent. Eros sapien
          laoreet duis, volutpat rutrum pulvinar.
          Natoque semper sapien aptent quis habitant
          aliquam condimentum luctus. Tempus
          pellentesque congue varius dapibus pharetra.
          Fermentum diam auctor bibendum rhoncus leo.
          Vestibulum tincidunt fames convallis ligula
          semper porttitor.
        </p>

        <p>
          Magnis maximus morbi, litora accumsan vivamus
          facilisi etiam pharetra. Platea congue orci
          sagittis purus scelerisque. Velit taciti
          maecenas praesent nam lobortis metus vehicula
          habitasse porttitor. Porta gravida placerat
          lobortis litora elit feugiat venenatis.
          Cras magna himenaeos consequat aliquet ad
          nec pharetra. Ligula eleifend imperdiet
          aptent primis placerat. Nec magnis tempus
          vulputate ipsum ad sagittis mus.
        </p>

        <h2>Heading</h2>

        <p>
          Vulputate nullam tempus montes eu tellus
          integer adipiscing pulvinar. Pharetra eu
          luctus id a potenti. Pulvinar egestas conubia
          ante varius lobortis iaculis metus. Netus
          sem imperdiet hendrerit vehicula netus est
          gravida tortor. Nunc ridiculus per montes
          nulla, facilisis lacinia per leo. Hendrerit
          scelerisque nulla in suspendisse sit tortor
          sagittis. Suscipit dictumst ipsum laoreet
          cras egestas suscipit orci. Per molestie
          felis erat platea blandit commodo.
        </p>

        <p>
          Ad venenatis sapien habitant posuere donec
          porttitor vel nisi. Sodales laoreet donec
          diam rhoncus lectus euismod orci torquent
          curae. Fames rhoncus torquent sed convallis;
          potenti cras. Dictumst arcu libero nulla
          malesuada mi ridiculus platea. Interdum
          ullamcorper fringilla himenaeos mollis;
          in arcu pharetra massa. Nunc mauris taciti
          montes sapien molestie orci ac quis.
        </p>
      </div>
    </section>
  )
}

// Album gallery; the first image has a special CSS class for styling.
function AlbumGallery() {
  return (
    <section
      id="albums"
      className="album-gallery"
      aria-label="Album artwork gallery"
    >
      <img
        className="album-featured"
        src={allEncores}
        alt="All Encores album cover"
      />

      <img
        src={articulation}
        alt="Articulation album cover"
      />

      <img
        src={blurred}
        alt="Blurred album cover"
      />

      <img
        src={encores2}
        alt="Encores 2 album cover"
      />

      <img
        src={eulogy}
        alt="Eulogy for Evolution album cover"
      />
    </section>
  )
}

// Displays information about the author, their photo, and social media icons.
function Author() {
  return (
    <section id="author" className="author-section">
      <div className="author-text">
        <h2>The Author</h2>

        <p>
          Sapien leo scelerisque per convallis torquent
          nunc. Lobortis eleifend a nam sit turpis
          nostra. Tempus suspendisse libero curae
          faucibus lobortis litora bibendum praesent!
          Eget quam magna, diam commodo interdum
          sapien magnis.
        </p>
      </div>

      <img
        src={profilePicture}
        alt="Author profile photograph"
        className="author-photo"
      />
 {/* These icons are images only; links can be added if needed. */}
      <div className="author-social" aria-label="Social media">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
      </div>
    </section>
  )
}

// Comments section
function Comments() {
  return (
    <section className="comments-section">
      <h2>Comments</h2>
/* Each article element represents one reader comment. */
      <article className="comment">
        <h3>soundseeker92</h3>
        <p>
          This article beautifully captures the essence
          of experimental sound. Erased Tapes is truly
          pushing boundaries. Makes me want to revisit
          Nils Frahm's early work. I wonder what you
          think about their older stuff?
        </p>
      </article>

      <article className="comment">
        <h3>Ted Baker</h3>
        <p>
          I've been following the label for years—so
          glad someone's finally writing about their
          impact.
        </p>
      </article>

      <article className="comment">
        <h3>Queen_of_noise</h3>
        <p>
          I discovered Erased Tapes through Ólafur
          Arnalds—this article brought back memories
          and be and my friends listening together.
          A bit too poetic for my taste, but still
          compelling.
        </p>
      </article>
    </section>
  )
}

// Footer, Displays repeated navigation links, copyright text, and social icons.
function Footer() {
  return (
    <footer className="site-footer">
      <Navigation />

      <p>Copyright © 2023 Erased Disks Ltd.</p>

      <div className="footer-social" aria-label="Social media">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
      </div>
    </footer>
  )
}

// Main App component: assembles all sections into the complete page.
function App() {
  return (
    <>
      <Header />

      <div id="article" className="page-container">
        <main>
          <Introduction />
          <ArticleContent />
          <AlbumGallery />
          <Author />
          <Comments />
        </main>
      </div>

      <Footer />
    </>
  )
}
// Export App so it can be rendered by the application entry point.
export default App
