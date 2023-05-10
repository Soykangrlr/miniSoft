import Card1 from "./card1"
import Card2 from "./card2"
import Card3 from "./card3"

function Index() {
  return (
    <div className="container mx-auto mt-12">
        <h1 className="text-center font-bold text-[55px] max-w-md mx-auto text-[#272D4E] leading-[70px]">Your eCommerce 
made simple</h1>
<div className="flex px-8 mt-8 gap-x-6">
 <Card1/>
 <Card2/>
 <Card3/>
</div>
    </div>
  )
}
export default Index