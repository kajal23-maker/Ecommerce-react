import React, {useState} from 'react';
import Categories from './Categories';

const Category = () => {

	const [data, setData]=useState(Categories);
	const filterResult=(catItem)=>{
		const result=Categories.filter((curData)=>{
			return curData.category===catItem;
		});
		setData(result);
	}


	return (
		<>
		
		<div className="container-fluid mx-2">
			<div className="row mt-5 mx-2">
				<div className="text-center bar">
					<button className="btn btn-dark btn-lg mx-3" onClick={()=>setData(Categories)}>All Catagories</button>
					<button className="btn btn-dark btn-lg mx-3" onClick={()=>filterResult('Saree')}>New Saree's</button>
					<button className="btn btn-dark btn-lg mx-3" onClick={()=>filterResult('Jewellery')}>Jewellery</button>
					<button className="btn btn-dark btn-lg mx-3" onClick={()=>filterResult('Jeans')}>Stylish Jeans</button>
					<button className="btn btn-dark btn-lg mx-3" onClick={()=>filterResult('Sandal')}>Sandals</button>
					<button className="btn btn-dark btn-lg mx-3" onClick={()=>filterResult('Bag')}>Women Bags</button>
				</div>
				<div className="col-md-12 text">
					<div className="row">
					{data.map((values)=>{
						const {id, title, price, discount, image}=values;
						return(
 							<>
 							   <div className="col-md-3 mt-5" key={id}>
									<div className="card">
									  <img src={image} className="card-img-top" alt="..." />
									  <div className="card-body">
									    <h5 className="card-title">{title}</h5>
									    <h6>Price: <del>&#8377;</del>{price}/- <span>{discount}% off</span></h6>
									    <p>Free Delivery</p>
									    <button className="btn btn-dark w-100 mt-2 mb-0">Buy now</button>
									  </div>
									</div>
								</div>
 							</>
						)
					})}
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Category;