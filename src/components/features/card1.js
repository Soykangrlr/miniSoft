function Card1() {
  return (
    <div className="max-w-md ">
        <div className="relative">
        <img src="../img/features/card1.png" alt="" />
        <img className="absolute top-8 -left-[110px]" src="../img/features/card1-2.png" alt="" />
        <img className="absolute top-5 -left-8" src="../img/features/card1-3.png" alt="" />
        </div>
       
        <h3 className="font-bold text-4xl text-[#272d4e]">All You Need to Start</h3>
        <p className="text-[#94A2B3] text-lg mt-3 mb-7">Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
        <a className="text-[#299EF3]  " href="#">Ecommerce for Wordpress ›</a>
    </div>
  )
}
export default Card1