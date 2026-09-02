// import "/Home.css";
import { Link } from "react-router-dom";
import Mimg from '../../public/images/mobiles/iqooz10.jpg'

function Home() {
  const categories = [
    {
      name: "Mobile",
      image: Mimg,
      path: "/categorypage/mobiles",
    },
    {
      name: "Gaming",
      image: 'https://m.media-amazon.com/images/I/51fRDc+9ajL.jpg',
      path: "/categorypage/gaming",
    },
    {
      name: "Audio",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFnbGmhiJtNPgxaxI56Q4I4OVI74q6Jdi8dTvVDEHlA&s=10",
      path: "/categorypage/audio",
    },
    {
      name: "Camera",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrk7qxbOjGsKu4HowHrqBRH9W7JhbX74fpK1-j0_Vvjw&s=10",
      path: "/categorypage/cameras",
    },
    {
      name: "TV",
      image: "https://m.media-amazon.com/images/I/81tNIlr1kSL.jpg",
      path: "/categorypage/tv&entertainment",
    },
  ];

  return (
    <main className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">
          <h1>Discover The Future Of Technology</h1>

          <p>
            Explore the latest mobiles, gaming consoles, cameras,
            audio devices and more.
          </p>

          <Link to="/categorypage/gaming">
            <button className="shop-btn">
              Shop Now
            </button>
          </Link>
        </div>

      </section>


      {/* CATEGORY SECTION */}
      <section className="category-section">

        <h2>Shop By Category</h2>

        <div className="category-grid">

          {categories.map((i) => (
            <Link
              to={i.path}
              className="category-card"
              key={i.name} >

              <img src={i.image} alt={i.name}  />

              <h3>{i.name}</h3>

            </Link>
          ))}

        </div>

      </section>


      {/* INFO SECTION */}
      <section className="info-section">

        <div className="info-card">
          <i className="fa-solid fa-truck-fast"></i>
          <h3>Fast Delivery</h3>
          <p>Quick and reliable delivery.</p>
        </div>

        <div className="info-card">
          <i className="fa-solid fa-shield-halved"></i>
          <h3>Secure Shopping</h3>
          <p>Your shopping experience is safe.</p>
        </div>

        <div className="info-card">
          <i className="fa-solid fa-headset"></i>
          <h3>Customer Support</h3>
          <p>We're here whenever you need help.</p>
        </div>

      </section>

    </main>
  );
}

export default Home;