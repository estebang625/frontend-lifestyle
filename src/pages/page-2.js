import React from "react"
import { Link } from "gatsby"

const SecondPage = () => (
  <div style={{ marginLeft: `auto`, marginRight: `auto`, marginBottom: '0px', textAlign: 'center' }}>
    <h1 style={{ marginBottom: '0px', height: '60px',backgroundColor: '#1C597D', color: 'white'}}>BANGIN' Lifestyle</h1>
    <div style={{ backgroundColor: '#1C597D', display: 'flex', justifyContent: "space-around" }}>
    <Link to="/">Home</Link> <Link to="/page-2/">Book List</Link> <Link to="/page-3/">Workout List</Link> <Link to="/page-4/">Article List</Link>
    </div>
    <br />
    <br />
    <img style={{ height: '400px'}} src="https://images-na.ssl-images-amazon.com/images/I/51hV5vGr4AL._SX326_BO1,204,203,200_.jpg"/>
    <h3>The 7 Habits of Highly Effective People</h3>
    <p>Stephen Covey</p>
    <a href="https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519">Link to book</a>
    <br />
    <br />
    <img style={{ height: '400px'}} src="https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._SX355_BO1,204,203,200_.jpg"/>
    <h3>The 48 Laws of Power</h3>
    <p>Robert Greene</p>
    <a href="https://www.amazon.com/dp/0140280197?tag=s7621-20">Link to book</a>
    <br />
    <br />
    <img style={{ height: '400px'}} src="https://images-na.ssl-images-amazon.com/images/I/516YkEzLC+L._SY344_BO1,204,203,200_.jpg"/>
    <h3>Eat That Frog!</h3>
    <p>Brian Tracy</p>
    <a href="https://www.amazon.com/dp/162656941X?tag=s7621-20">Link to book</a>
    <br />
    <br />
    <img style={{ height: '400px'}} src="https://cdn.lifehack.org/wp-content/uploads/2014/01/mindsight.jpg"/>
    <h3>Mindsight</h3>
    <p>Daniel J. Siegel</p>
    <a href="https://www.amazon.com/Mindsight-New-Science-Personal-Transformation/dp/0553386395">Link to book</a>
    <form action="/page-4/">
        Personal BANGIN' Recommendation:
        <br />
        <input type="text" value="title:"></input>
        <input type="text" value="author:"></input>
        <input type="text" value="link:"></input>
        <input type="submit" value="submit"/>
    </form>
  </div>
)

export default SecondPage
