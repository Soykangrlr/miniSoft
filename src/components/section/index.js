function Index() {
    return (
        <div className="bg-[#7854F7] mt-24 section-clip py-10 relative">
            <div className="container mx-auto flex-col  px-6 ">
                <div className="flex -mt-24 items-center gap-x-6 relative " >
                    <img className="z-10" src="../img/section/section1.png" alt="" />
                    <div >
                        <h3 className="text-4xl text-white font-bold max-w-sm">Develop Without Limits</h3>
                            <p className="font-light mt-5 mb-8 items-end text-white max-w-md">WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</p>
                            <a className="text-white bg-[#70C217] py-3 px-5 rounded-3xl "  href="#">Read the  Documentation</a>
                    </div>
                 <div className="circle-big absolute bottom-1 -left-5 "></div>
                 <div className="circle-small absolute top-44 -left-5 "></div>

                </div>
                <div className="flex -mb-32 justify-end items-center gap-x-6 relative " >
                   
                    <div >
                        <h3 className="text-4xl text-white font-bold max-w-sm">Know our Global Community</h3>
                            <p className="font-light mt-5 mb-8 items-end text-white max-w-md">WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</p>
                            <a className="text-white bg-[#70C217] py-3 px-5 rounded-3xl "  href="#">Read the  Documentation</a>
                    </div>
                    <img  className="z-10" src="../img/section/section2.png" alt="" />
                    <div className="circle-medium absolute -top-2 -right-24 "></div>
                 <div className="circle-small absolute top-1 right-80 z-20"></div>
                </div>
                
            </div>
            <img className="absolute top-0 right-0" src="../img/section/woo.png" alt="" />
        </div>
    )
}
export default Index