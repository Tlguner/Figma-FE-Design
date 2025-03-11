
const Navbar = ({FeatureScroll,PriceScroll}) => {
  return (
    <div>  <div className='navbar'>
      
    <button className='nav-btn'>Home</button>
<button className='nav-btn' onClick={FeatureScroll}>Features</button>
<button className='nav-btn' onClick={PriceScroll}>Pricing</button>
<button className='nav-btn'>Blog</button>
    
    </div></div>
  )
}

export default Navbar