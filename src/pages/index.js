import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div style={{ marginLeft: `auto`, marginRight: `auto`, marginBottom: '0px', textAlign: 'center' }}>
    <h1 style={{ marginBottom: '0px', height: '60px',backgroundColor: '#1C597D', color: 'white'}}>BANGIN' Lifestyle</h1>
    <div style={{ backgroundColor: '#1C597D', display: 'flex', justifyContent: "space-around" }}>
    <Link to="/">Home</Link> <Link to="/page-2/">Book List</Link> <Link to="/page-3/">Workout List</Link> <Link to="/page-4/">Article List</Link>
    </div>
    <img src="https://totalgymdirect.com/total-gym-blog/wp-content/uploads/healthy-lifestyle-commitment-800x533.jpeg" />
    <h2>Welcome to the <span style={{color: '#1C597D'}}>BANGIN'</span> Lifestyle Website!</h2>
    <h3>With BANGIN' Lifestyle the goal is to help guide people to have a better and healthy lifestyle by giving them the tools that could lead them to the right dierection so that they can achieve their main goal... having a BANGIN' lifestyle!</h3>
  </div>
)

export default IndexPage
