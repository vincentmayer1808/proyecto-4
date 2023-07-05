import React from "react";
import "./menu.css"

export const Menu = () => {
  return (
    <div className="container-fluid bg-dark pb-2">
      <div className="container-fluid text-light text-center bg-dark">
        <img src="/assets/menu.jpg" className="w-100 mb-2" alt="Menu Picture" />
        <h2>Menu</h2>
        <p>Get a look at our menu and pick what you prefer!</p>
      </div>
      <div className="menu">
        <div>
          <h3>Entry</h3>
          <ul>
            <li className="food">
              <span> Oignon Rings</span> <span>$5</span>
            </li>
            <li className="food">
              <span> Chicken Wings </span>
              <span>$7</span>
            </li>
            <li className="food">
              <span> Imperial Rolls</span> <span>$5</span>
            </li>
            <li className="food">
              <span> Cheese Sticks</span>
              <span>$5</span>
            </li>
            <li className="food">
              <span> Garlic Bread</span>
              <span>$5</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Salad</h3>
          <ul>
            <li className="food">
              <span> Ceasar Salad</span>
              <span>$10</span>
            </li>
            <li className="food">
              <span> Greek Salad</span>
              <span>$8</span>
            </li>
            <li className="food">
              <span>Green Salad</span>
              <span>$8</span>
            </li>
            <li className="food">
              <span> Coleslaw Salad</span>
              <span>$8</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Soup</h3>
          <ul>
            <li className="food">
              <span> Minaestrom</span>
              <span>$8</span>
            </li>
            <li className="food">
              <span> Chicken Noodles</span>
              <span>$8</span>
            </li>
            <li className="food">
              <span> Mushroom Cream</span>
              <span>$8</span>
            </li>
            <li className="food">
              <span> Tomato Soup</span>
              <span>$8</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Main Plate</h3>
          <ul>
            <li className="food">
              <span> Fish'n Chips</span>
              <span>$10</span>
            </li>
            <li className="food">
              <span> Spaghetti</span>
              <span>$10</span>
            </li>
            <li className="food">
              <span>React Burger</span>
              <span>$10</span>
            </li>
            <li className="food">
              <span> Fried Chicken</span>
              <span>$10</span>
            </li>
            <li className="food">
              <span>React Pizza</span>
              <span>$15</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Dessert</h3>
          <ul>
            <li className="food">
              <span> Tiramisu</span>
              <span>$5</span>
            </li>
            <li className="food">
              <span> Volcano</span>
              <span>$5</span>
            </li>
            <li className="food">
              <span> Ice Cream</span>
              <span>$5</span>
            </li>
            <li className="food">
              <span> Cheese Cake</span>
              <span>$5</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
