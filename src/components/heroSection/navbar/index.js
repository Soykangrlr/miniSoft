function Index() {
  return (
    <div className=" p-4 flex items-center justify-between">
      <div className="flex gap-x-10  items-center">
      <img src="../img/header/logo.png" alt="" />
      <ul className=" flex  items-center gap-x-2 navFont  ">
        <li >Sell</li>
        <li>Marketplace</li>
        <li>Community</li>
        <li>Develop</li>
        <li>Resources</li>
      </ul>
      </div>
      <div className="flex gap-x-4 items-center">
      <a className=" navFont" href="#">Log In</a>
      <a className="text-white bg-brandPurple p-3 rounded-lg"  href="#">Get Started</a>
      </div>
        
    </div>
  )
}
export default Index