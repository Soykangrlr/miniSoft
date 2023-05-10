import NavBar from "./navbar"
function Index() {
  return (
    <div className="heroBg relative ">
      <div className="container mx-auto ">
        <NavBar />
        <div className="flex mt-12">
          <div className="w-3/5 py-6">
            <p className="buildFont">Building exactly the eCommerce website you want.</p>
            <p className="heroDescription mt-5">WooCommerce is a customizable, open-source eCommerce platform built on WordPress. 
Get started quickly and make your way.</p>
            <div className=" flex gap-x-5 items-center mt-5">
            <a className="text-white bg-brandPurple p-3 rounded-lg"  href="#">Start New Store</a>
            <a href="#" className="text-[#299EF3]"><span className="text-[#94A2B3]">or</span> Customize & Extend ›</a>
            </div>
          </div>
          <div className="absolute right-0 w-2/5 ">
            <img className="" src="../img/hero/featured-image.png" alt="" />
          </div>
        </div>
       
      </div>


    </div>
  )
}
export default Index