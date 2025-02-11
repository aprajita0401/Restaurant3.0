import React, { useState }from 'react';
import './App.css'; 
import logo_3 from './logo_3.png';
import scenic from './scenic.webp';
import ramen from './ramen.png';
import burger from './burger.png';
import Indianbread from './Indianbread.png';
import paneertikka from './paneertikka.png';
import pasta from './pasta.png';
import pizza from './pizza.png';
import sabji from './sabji.png';
import tikkamasala from './tikkamasala.png';
import search from './search.png';
import tasty from './tasty.png';
import GitHub from './GitHub.png';
import insta from './insta.png';
import whatsapp from './whatsapp.png';
import x from './x.png';
function Home() 
{
  const [cart, setCart] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (foodName, foodPrice) => {
    alert('Food item has been added to the cart');
    if (cart[foodName]) {
      const updatedCart = { ...cart };
      updatedCart[foodName].quantity++;
      updatedCart[foodName].cost += foodPrice;
      setCart(updatedCart);
    } else {
      const updatedCart = { ...cart };
      updatedCart[foodName] = {
        quantity: 1,
        cost: foodPrice
      };
      setCart(updatedCart);
    }
    setTotalCost(prevTotalCost => prevTotalCost + foodPrice);
  };

  const removeFromCart = (foodName, foodPrice) => {
    
    if (cart[foodName]) {
      const updatedCart = { ...cart };
      if (updatedCart[foodName].quantity > 1) {
        updatedCart[foodName].quantity--;
        updatedCart[foodName].cost -= foodPrice;
        setCart(updatedCart);
      } else {
        delete updatedCart[foodName];
        setCart(updatedCart);
      }
      setTotalCost(prevTotalCost => prevTotalCost - foodPrice);
      alert('Food item has been removed from the cart');
    }
  };
  const resetCart = () => {
    setCart({});
    setTotalCost(0);
  };
    const handleConfirm = () => {
        alert('Order has been confirmed. Happy Eating :)');
        setCart({});
    setTotalCost(0);
    
      };
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
            <img src={logo_3} alt="Logo"/>
        </a>
        <nav className="navbar">
          <a href="#heading">Culinary Array</a>
          <a href="#cart">Cart</a>
          <a href="#c3">About us</a>
          <a href="#c10">Get in Touch</a>
        </nav>
        <div className="c5">
          <form action="https://www.google.com/search" method="get" className="search">
            <input type="text" placeholder="search here" name="q"/>
            <button type="submit">
              <img style={{width: '20px', height: '20px'}} src={search} alt="search" />
            </button>
          </form>
        </div>
      </header>
      <br/><br/><br/><br/><br/>
      <div className='x' style={{border: '15px solid #EBC47F', borderRadius: '15px'}}>
        <div className='y'>
          <img style={{width: '700px', height: '400px'}} src={tasty} alt='food'/></div>
        <div className='z'>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h1 style={{fontSize: '4rem', color:'#EBC47F', fontFamily:'cursive'}}>Taste of heaven in every bite</h1><br/><br/>
          <p style={{fontSize: '1.1rem'}}>Indulge in our exquisite cuisine crafted with a harmonious blend of authentic spices, tantalizing your taste buds with every bite at our esteemed fine dining establishment. Experience culinary excellence with our meticulously curated menu showcasing the rich flavors of authentic spices, elevating your dining experience to new heights.</p><br/><br/><br/>
          <a href="#heading"><button style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Order now</button></a>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="menu" id="menu">
        <h1 className="heading" id="heading" style={{color:'#EBC47F'}}><br/><br/><center>Culinary <span>Array</span></center><br/></h1>
        <h1></h1>
        <div className="box-container">
          <div className="box">
            <img style={{width:'250px',height:'150px'}} src={burger} alt="burger"/><br/><br/>
            <h2 style={{color: '#EBC47F'}}>Burger</h2><br/>
            <p style={{color:'#bcbcbe'}}>featuring a succulent prime veg patty, aged cheddar cheese, crisp lettuce, ripe tomato slices, caramelized onions, tangy pickles, house-made truffle aioli, all nestled between a perfectly toasted artisanal brioche bun.</p><br/>
            <div className="prive" style={{color: '#EBC47F'}}>Rs.450</div><br/>
            <button className="button" onClick={() => addToCart('Burger', 450)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Add to cart</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => removeFromCart('Burger', 450)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Remove</button>
          </div>
          <div className="box">
            <img style={{width:'200px',height:'150px'}} src={pasta} alt="pasta"/><br/><br/>
            <h2 style={{color: '#EBC47F'}}>Alfredo Spaghetti</h2><br/>
            <p style={{color:'#bcbcbe'}}>a culinary masterpiece featuring perfectly cooked spaghetti bathed in a velvety, creamy parmesan-infused Alfredo sauce, harmoniously creating a symphony of rich and decadent flavors. </p><br/>
            <div className="prive" style={{color: '#EBC47F'}}>Rs.350</div><br/>
            <button className="button" onClick={() => addToCart('Alfredo Spaghetti',350)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Add to cart</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => removeFromCart('Alfredo Spaghetti', 350)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Remove</button>
          </div>
          <div className="box">
          <img style={{width:'200px',height:'150px'}} src={pizza} alt="pizza"/><br/><br/>
            <h2 style={{color: '#EBC47F'}}>Authentic Italian Pizza</h2><br/>
            <p style={{color:'#bcbcbe'}}>presenting you our gourmet pizza featuring a harmonious blend of fresh, hand-tossed dough, topped with artisanal tomato sauce, imported mozzarella di bufala, fragrant basil leaves, and a drizzle of extra virgin olive oil.</p><br/>
            <div className="prive" style={{color: '#EBC47F'}}>Rs.600</div><br/>
            <button className="button" onClick={() => addToCart('Authentic Italian Pizza',600)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Add to cart</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => removeFromCart('Authentic Italian Pizza', 600)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Remove</button>
          </div>
          <div className="box">
          <img style={{width:'170px',height:'150px'}} src={Indianbread} /><br/><br/>
            <h2 style={{color: '#EBC47F'}}>Indian bread</h2><br/>
            <p style={{color:'#bcbcbe'}}>Indulge in our signature naan, a delicate blend of soft, oven-baked bread, infused with aromatic spices, and brushed with clarified butter for a rich, flavorful experience</p><br/>
            <div className="prive" style={{color: '#EBC47F'}}>Rs.200</div><br/>
            <button className="button" onClick={() => addToCart('Indian Bread', 200)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Add to cart</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => removeFromCart('Indian Bread', 200)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Remove</button>
          </div>
          <div className="box">
          <img style={{width:'170px',height:'150px'}} src={paneertikka} /><br/><br/>
            <h2 style={{color: '#EBC47F'}}>Paneer Tikka</h2><br/>
            <p style={{color:'#bcbcbe'}}>tantalizing blend of succulent paneer cubes marinated in a rich medley of aromatic spices, simmered in a creamy tomato-based sauce infused with garlic, ginger, onions, and a touch of cream, creating a symphony of flavors that captivates the palate.</p><br/>
            <div className="prive" style={{color: '#EBC47F'}}>Rs. 450</div><br/>
            <button className="button" onClick={() => addToCart('Paneer Tikka',450)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Add to cart</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => removeFromCart('Paneer Tikka', 450)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Remove</button>
          </div>
          <div className="box">
          <img style={{width:'200px',height:'150px'}} src={tikkamasala} /><br/><br/>
            <h2 style={{color: '#EBC47F'}}>Chicken Tikka Masala</h2><br/>
            <p style={{color:'#bcbcbe'}}>tantalizes taste buds with succulent chicken marinated in a harmonious blend of yogurt, aromatic spices, and rich tomato-based sauce, creating a symphony of flavors that evoke the essence of Indian cuisine. Also  includes ripe tomatoes, garlic, ginger, and onions</p><br/>
            <div className="prive" style={{color: '#EBC47F'}}>Rs. 650</div><br/>
            <button className="button" onClick={() => addToCart('Chicken Tikka Masala',650)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Add to cart</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => removeFromCart('Chicken Tikka Masala', 650)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Remove</button>
          </div>
          <div className="box">
          <img style={{width:'200px',height:'150px'}} src={sabji} /><br/><br/>
            <h2 style={{color: '#EBC47F'}}>Aloo Gobi Sabzi</h2><br/>
            <p style={{color:'#bcbcbe'}}>blend of tender cauliflower florets and potatoes, delicately infused with a symphony of aromatic spices, includes fresh cauliflower, potatoes, onions, tomatoes, ginger, garlic, turmeric, cumin, coriander, garam masala, and garnished with fresh cilantro leaves</p><br/>
            <div className="prive" style={{color: '#EBC47F'}}>Rs. 500</div><br/>
            <button className="button" onClick={() => addToCart('Aloo Gobi Sabzi',500)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Add to cart</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => removeFromCart('Aloo Gobi Sabzi', 500)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Remove</button>
          </div>
          <div className="box">
          <img style={{width:'160px',height:'150px'}} src={ramen} /><br/><br/>
            <h2 style={{color: '#EBC47F'}}>Ramen</h2><br/>
            <p style={{color:'#bcbcbe'}}>Our signature ramen boasts rich, savory broth crafted from slow-simmered chicken bones, paired with springy noodles, tender chicken slices, marinated soft-boiled egg, fragrant green onions, and a sprinkle of umami-rich nori seaweed.</p><br/>
            <div className="prive" style={{color: '#EBC47F'}}>Rs. 550</div><br/>
            <button className="button" onClick={() => addToCart('Ramen',550)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Add to cart</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => removeFromCart('Ramen', 550)} style={{borderRadius: '5px', padding: '10px', backgroundColor: '#EBC47F'}}>Remove</button>
          </div>
        </div>
        <div className='cart' id='cart'>
          <center>
          <h1 style={{color:'#EBC47F'}}>Cart</h1><br/>
          <ul id="cart-items" style={{color:'#EBC47F'}}>
          {Object.keys(cart).map(foodName => (
            <li key={foodName}>{foodName} - {cart[foodName].quantity} {cart[foodName].quantity > 1 ? 'items' : 'item'} {cart[foodName].cost} Rs</li>
          ))}
        </ul>
          <br/><div style={{color:'#EBC47F'}}><b>Total Cost: <span id="total-cost">Rs. {totalCost}</span></b></div><br/>

          <button className="button" onClick={resetCart} style={{borderRadius: '5px', padding: '8px', backgroundColor: '#EBC47F'}}>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="button" onClick={handleConfirm} style={{borderRadius: '5px', padding: '8px', backgroundColor: '#EBC47F'}}>Confirm Order</button>
          </center>
        </div>
      </div>
      <div className="container">
        <div className="c3" id='c3'>
          <h2 style={{ color: '#EBC47F' }}>About Us</h2>
        </div>
        <div className="c4">
          <div className="c1">
            <img style={{width:'600px',height:'450px'}} src={scenic} alt="Scenic"/>
          </div>
          <div className="c2" style={{ padding: '50px' }}>
            <p style={{fontFamily: 'revert-layer', color: '#fff'}}>
              Welcome to Elysian Haven, where culinary excellence meets breathtaking serenity. Nestled along the
              tranquil shores of the ocean, our restaurant boasts a sublime ambiance, inviting guests to indulge in an
              unparalleled dining experience amidst nature's embrace.
            </p><br/>
            <p style={{fontFamily: 'revert-layer', color: '#fff'}}>
              At Elysian Haven, we pride ourselves on our commitment to perfection, curated by a team of world-class
              Michelin-star chefs. With unwavering dedication, they craft each dish with an exquisite blend of passion,
              eloquence, and the finest ingredients, ensuring that every bite is a symphony of flavor and elegance.
            </p><br/>
            <p style={{fontFamily: 'revert-layer', color: '#fff'}}>
              Immerse yourself in a realm where gastronomic artistry meets panoramic beauty, and let us whisk you away
              on a journey of epicurean delight. Welcome to Elysian Haven, where every moment is an ode to culinary
              brilliance and soulful indulgence.
            </p>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
      <div className="c10" id="c10">
        <div className="c0" id="c0">
          <center>
            <h1 style={{ color: '#EBC47F' }}>Get in Touch<br/><br/></h1>
          </center>
        </div>
        <div className="c90">
          <center>
          <a href="https://github.com/aprajita0401/Portfolio2.0"><img style={{width:'80px',height:'50px'}} src={GitHub} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com/"><img style={{width:'50px',height:'50px'}} src={insta} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://web.whatsapp.com/"><img style={{width:'50px',height:'50px'}} src={whatsapp} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img style={{width:'40px',height:'50px'}} src={x} />
          </center>
        </div>
      </div>
      </div>  
  );
}
export default Home;