import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header.js";
import Main from "./components/main/main.js";
import Footer from "./components/footer/footer.js";
import logo from "./Assets/Images/stubucks-logo.png";
import facebook from "./Assets/Icons/icon-facebook.png";
import instagram from "./Assets/Icons/icon-instagram.png";
import linkedin from "./Assets/Icons/icon-linkedin.png";
import pinterest from "./Assets/Icons/icon-pinterest.png";
import twitter from "./Assets/Icons/icon-twitter.png";
import heroBackground from "./Assets/Images/StubucksHero.jpg";
import icedCoffee from "./Assets/Images/StubrewIcedCoffee.png";
import buyCoffee from "./Assets/Images/buyCoffee.jpg";
import buyTea from "./Assets/Images/buyTea.jpg";
import buyEquipment from "./Assets/Images/buyEquipment.png";


class App extends Component {
  state = {
    Header : { heading : <p id="offerCode" style={{color:'black'}}> 'Free Shipping on orders of £30+ | Use Code STULOVE > offer details >' </p>,
                storeLocator : <p id="storeLocator" style={{color:'white'}}>Find nearest store</p>,
                logo : {logo},
                menu : ['Coffee', 'Tea', 'Menu', 'Rewards', 'Want to join our Team?', 'Locations', 'Specials']},
    Main : { heroBackground : heroBackground,
              icedCoffee : icedCoffee,
              icedCoffeeBg : '#0e141d',
              headings: [
              <div className = "hotCoffeeText"><h1><span className='greenText'>Love</span> your Stu</h1><h4>Look at our range and choose the Stu that suits you.</h4></div>, 
              <div className = "icedCoffeeText"><h1>The new <span className='greenText'>StuBrew</span></h1><h4>A delicious new nitro brew develop carefully on the darkside of the moon, instilled with the freshness of Stu himself.</h4></div>, 
              ],
              
              spans: [
              <h1 style={{color:'black'}}>Try something <span className='greenText'>new</span>?</h1>, 
              <h1 style={{color:'white'}}>The Stu <span style={{color:'Black'}}>Shop</span>?</h1>
            ]},
    Tiles : [
      {img : buyCoffee, title : 'Shop Coffee', subtitle : 'Hand-Rosted Coffee, delievered fresh for ultimate flavour.'},
      {img : buyTea, title : 'Shop Tea', subtitle : 'Our selection of premium whole leaf tea.'},
      {img : buyEquipment, title : 'Shop equipment', subtitle : 'Brewers and presses for making the perfect Stu at home.'}
  ],
    NavFooter : {headings : ["Help", "About Us", "Company Info", "Share"],
              helpLinks : ["My account", 'Stu Cards', "Stu Rewards", "Shipping & Returns", "Current Offers", "Contact Us"],
              aboutLinks : ["Join Stu", 'Social Responsibilty', "Our People", "Newsroom"],
              companyLinks : ['Code Ethics', 'Responsible Sourcing', 'Supply Chain', 'Limited Partners', 'Office Coffee'],
              socialLinks : [<img src={facebook} />, <img src={instagram} />, <img src={linkedin} />, <img src={twitter} />, <img src={pinterest} /> ]
             },
    Footer : {address : "Stubucks, Cheshire, Since 2019",
              links : ['Stubucks Coffee', "|", "Privacy Policy", "|", "Terms of Service"],
              trademark : "Stubucks is not a registered trademark, infact it was just something Stuart made Dan make even though he didn't have any spare time. But he likes designing stuff so that's OK"}

}
  render() {
    return (
      <div className="App">
        <Header 
          heading = {this.state.Header.heading} 
          storeLocator = {this.state.Header.storeLocator} 
          logo = {this.state.Header.logo}
          menu = {this.state.Header.menu}
          />
        
        <Main 
          heroBackground = {this.state.Main.heroBackground} 
          icedCoffee = {this.state.Main.icedCoffee} 
          icedCoffeeBg = {this.state.Main.icedCoffeeBg}
          headings = {this.state.Main.headings}
          spans = {this.state.Main.spans}
          tiles = {this.state.Tiles}
          links = {this.state.NavFooter}
          />
        <Footer
          footer = {this.state.Footer}
        />
      </div>
    );
  }
}

export default App;
