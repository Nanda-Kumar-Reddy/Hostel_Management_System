import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ProductCard from '../ProductCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
const primeDeals = [
  {
    title: 'Nek-chand-1',
    brand: 'NC',
    price: '1,05000',
    id: 1002,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Hostel_Dormitory.jpg',
    rating: 4.4,
  },
  {
    title: 'Nek-chand-2',
    brand: 'NC',
    price: '1,05000',
    id: 1003,
    imageUrl:
      'https://www.hostelworld.com/blog/wp-content/uploads/2018/06/hostel-room-types-5.jpg',
    rating: 4.2,
  },
  {
    title: 'Nek-chand-3',
    brand: 'NC',
    price: '1,05000',
    id: 1004,
    imageUrl: 'https://sbu.ac.in/img/hostel.jpg',
    rating: 4.5,
  },
  {
    title: 'Nek-chand-4',
    brand: 'NC',
    price: '1,05000',
    id: 1005,
    imageUrl:
      'https://www.your-space.in/wp-content/uploads/2022/03/3-min-1-2-500x333.webp',
    rating: 4.2,
  },
  {
    title: 'Nek-chand-5',
    brand: 'NC',
    price: '1,05000',
    id: 1006,
    imageUrl:
      'https://www.hostelworld.com/blog/wp-content/uploads/2018/06/hostel-room-types-5.jpg',
    rating: 4.0,
  },
  {
    title: 'Nek-chand-6',
    brand: 'NC',
    price: '1,05000',
    id: 1007,
    imageUrl:
      'https://www.tripsavvy.com/thmb/Q4arfAnMLEvxB80dva0a3eZDoFc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-941659684-f9058b5f86fb496ebed84a47c2b15bf1.jpg',
    rating: 4.5,
  },
  {
    title: 'ZAKIR-A',
    brand: 'ZAKIR',
    price: '90,000',
    id: 1008,
    imageUrl:
      'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1650446701/Website/CMS-Uploads/fxekglvpfbbklidggutb.jpg',
    rating: 4.1,
  },
  {
    title: 'ZAKIR-B',
    brand: 'ZAKIR',
    price: '90,000',
    id: 1009,
    imageUrl:
      'https://ahplindiahome.files.wordpress.com/2019/07/room01-3-1-krishna.jpg',
    rating: 4.5,
  },
  {
    title: 'ZAKIR-C',
    brand: 'ZAKIR',
    price: '90,000',
    id: 1010,
    imageUrl:
      'https://images.unsplash.com/photo-1623625434462-e5e42318ae49?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zdGVsfGVufDB8fDB8fHww',
    rating: 4.0,
  },
  {
    title: 'ZAKIR-D',
    brand: 'ZAKIR',
    price: '90,000',
    id: 1011,
    imageUrl:
      'https://www.gitam.edu/sites/default/files/2023-06/Hostel-HYD_Banner.jpg',
    rating: 4.2,
  },
]

class PrimeDealsSection extends Component {
  render() {
    return (
      <div>
        <h1 className="primedeals-list-heading">
          Chandigarh University Hostels
        </h1>
        <ul className="products-list">
          {primeDeals.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default PrimeDealsSection
