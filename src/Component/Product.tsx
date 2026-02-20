
import img1 from "../assests/Frame 6.png"
import img2 from "../assests/Frame 6 (1).png"
import img4 from "../assests/Frame 6 (10).png"
import img5 from "../assests/Frame 6 (11).png"
import img6 from "../assests/Frame 6 (4).png"
import img7 from "../assests/Frame 6 (5).png"
import img8 from "../assests/Frame 6 (6).png"
import img9 from "../assests/Frame 6 (7).png"
import img10 from "../assests/Frame 6 (12).png"
import img11 from "../assests/Frame 6 (13).png"
import img12 from "../assests/Frame 6 (14).png"
import img13 from "../assests/Frame 6 (15).png"
import img14 from "../assests/Frame 6 (16).png"
import img15 from "../assests/Frame 6 (17).png"
import img16 from "../assests/Frame 6 (18).png"
import img17 from "../assests/Frame 6 (19).png"
import img18 from "../assests/Frame 6 (20).png"
import img19 from "../assests/Frame 6 (21).png"
import img20 from "../assests/Frame 6 (22).png"
import img21 from "../assests/Frame 6 (23).png"


function Product() {
    let products = [
        { productImg: img1, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img2, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img4, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img5, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img6, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img7, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img8, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img9, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img10, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img11, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img12, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img13, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img14, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img15, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img16, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img17, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
       { productImg: img18, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
       { productImg: img19, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img20, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
        { productImg: img21, title: "Half Moon Bay, California, US", desc: "Beach and ocean views", dataAndHost: "22–27 Oct · Individual Host", price: "", rating: "5.0" },
    ]
    return (
        <div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {products.map((item, i) => (
                    <div key={i}>
                        <div>
                            <img src={item.productImg} alt="product Image" className='w-full' />
                        </div>
                        <div className='flex justify-between font-semibold'>
                            <p>{item.title}</p>
                            <div>Rating</div>
                        </div>
                        <div>
                            <p>{item.desc} </p>
                            <p>{item.dataAndHost} </p>
                            <p>{item.price} </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-col justify-center items-center text-center my-10'>
                <div>
                    <p>Continue exploring amazing views</p>
                    <button className='bg-black text-white px-6 py-2 rounded-md mt-4'>Show more</button>
                </div>
            </div>
        </div>
    )
}

export default Product