import React, {useState, useEffect} from 'react'
import SnowBackground from '../components/snowBackground'
import SwipeContainer from '../components/SwipeContainer'
import axios from 'axios'
import { Product } from "../utils/Product";
import { items } from "../utils/items";
const Home = () => {
    console.log("items: ",items)
    // const [products, setProducts] = useState()
    
    const createItems = (items) => {
        let arr = []
        for (let i = 0; i < items.length; i++) {
            console.log(items[i])
            let temp = new Product(
              items[i].productNameEn,
              items[i].sellPrice,
                items[i].categoryName,
              items[i].productImage
            );
            arr.push(temp)
        }
        
        return arr
    }

    const products =createItems(items)
    useEffect(() => {
    //     const headers = {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods" : "GET,POST,HEAD,DELETE,PUT,OPTIONS",
    //       "CJ-Access-Token": "bfbfd53c0dbd45d2ae8ee93212b99506",
    //     };
    //   axios
    //     .get("https://developers.cjdropshipping.com/", { headers })
    //     .then((response) =>
    //         console.log(response)
    //     .catch((err) => console.log("this is error",err))
        //     )
        
    
    },[])
// createItems(items);
    return (
      <div>
        <SnowBackground />
        <SwipeContainer products={products} />
      </div>
    );
}

export default Home
