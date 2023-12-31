import { toBeRequired } from "@testing-library/jest-dom/matchers"
import React, {Fragment, useState} from "react"
import "./Food.css"

const Food = (props) => {
    return (
        <Fragment>
            <h4 className="foodTitle">Choose From the selected list</h4>
            <ul className="ulFoods">
                {props.foodItems.map((item) => {
                    return (
                        <li key={item.id} className="liFoods">
                            <img className="foodImg"
                            src={require(`./images/${item.image}`)}
                            alt={item.name}/>
                            <div className="foodItem">
                                <p className="foodDesc">{item.desc}</p>
                                <p className="foodPrice">{item.price}</p> 
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );

};

export default Food;
