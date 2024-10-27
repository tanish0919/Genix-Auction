const Card = ({ item }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="w-full ">
          <img src={item.imageUrl} alt="Headphone" className="image-full" />
        </figure>
        <div className="card-body items-start  ">
          <h2 className="card-title">{item.title}</h2>
          <div className="flex flex-col gap-3 w-full ">
            <div className="flex  justify-end ">
              <p className="">Selling Price</p>
              <p className="font-bold text-end">
                ${item.sellingPrice}
              </p>
            </div>
            <div className="flex justify-end">
              <p>Bidding Price</p>
              <p className="font-bold text-end">${item.biddingPrice}</p>
            </div>
            <div className="flex justify-end">
              <p>Ends in: </p>
              <p className="text-end">{item.description}</p>
            </div>
          </div>
          <div className="card-actions flex w-full justify-center">
            <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:from-purple-600 hover:to-pink-600 w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
