import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Hostel Management System</h1>
        <img
          src="https://cdn.w600.comps.canstockphoto.com/hostel-concept-stock-images_csp21607758.jpg"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Here you can apply for the hostel rooms , apply for the NOC(No
          Objection Letter) and Room change facilities.This makes hostel life
          easier and simpler.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1596276020587-8044fe049813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1878&q=80"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
