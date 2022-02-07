import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useHistory } from "react-router-dom";

export function Page() {

  const[fruits,setfruits]=useState([])

  async function getFruits(){
    const data=await fetch("https://6166c4e513aa1d00170a6713.mockapi.io/fruits")
    const fruts=await data.json()
    setfruits(fruts)
  }

  useEffect(getFruits,[])

// // <div key={p.id}>
// <button onClick={() => addItem(p)}>Add to cart</button>
// </div>
const history=useHistory()
  return (
    <div className="home">
      <nav className="nav">
        <h3>Fresh Fruits</h3>
        <IconButton color="primary" aria-label="add to shopping cart" size="large" onClick={()=>history.push("/cart")}>
        <ShoppingCartIcon />
      </IconButton>
      </nav>
      <div className="fruits-image">
        <img className="fruits-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkz0HjNscYAzYYvJdD5dAywgzJiGOkoXyz_V_Qax0ZdxKfX0GEwwIaV_Z3-k2bkiT2Fos&usqp=CAU"
           alt="fruits"/>
      </div>
       <div className="fruits">
      {fruits.map((i,index) => (
        <Fruitcard name={i.name} pic={i.pic} price={i.price} i={i} key={index}/>
      ))}
    </div>
    </div>
    
  );
}

function Fruitcard({name,pic,price,i}){
  const { addItem } = useCart();
  return(
    <div className="fruit">
        <Card sx={{ maxWidth:345,padding:0.5}}>
      <CardMedia sx={{objectFit:"contain"}}
        component="img"
        height="300"
        image={pic}
        alt={name}
      />
      <CardContent sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs.{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={()=>addItem(i)}>Add to cart</Button>
        
      </CardActions>
    </Card>
    </div>
  )
}