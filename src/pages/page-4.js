import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
<div style={{ marginLeft: `auto`, marginRight: `auto`, marginBottom: '0px', textAlign: 'center' }}>
<h1 style={{ marginBottom: '0px', height: '60px',backgroundColor: '#1C597D', color: 'white'}}>BANGIN' Lifestyle</h1>
    <div style={{ backgroundColor: '#1C597D', display: 'flex', justifyContent: "space-around" }}>
    <Link to="/">Home</Link> <Link to="/page-2/">Book List</Link> <Link to="/page-3/">Workout List</Link> <Link to="/page-4/">Article List</Link>
    </div>
    <h2>60 Small Ways to Improve Your Life in the Next 100 Days</h2>
    <p>Contrary to popular belief, you don’t have to make drastic changes in order to notice an improvement in the quality of your life. At the same time, you don’t need to wait a long time in order to see the measurable results that come from taking positive action.</p>
    <a href="https://www.lifehack.org/articles/lifestyle/60-small-ways-to-improve-your-life-in-the-next-100-days.html">link to the BANGIN' article</a>
    <br/>
    <br/>
    <h2>Building Better Mental Health</h2>
    <p>Your mental health influences how you think, feel, and behave in daily life. It also affects your ability to cope with stress, overcome challenges, build relationships, and recover from life’s setbacks and hardships.</p>
    <a href="https://www.helpguide.org/articles/mental-health/building-better-mental-health.htm">link to the BANGIN' article</a>
    <br/>
    <br/>
    <h2>Five Steps to Improved Physical Health</h2>
    <p>Individual health impacts the entire community. Sick days inhibit work productivity and educational opportunities, and contagious illnesses do so exponentially. Long-term, chronic, and terminal maladies impact family economics, child care, and emotional health.</p>
    <a href="https://www.unitedway.org/blog/five-steps-to-improved-physical-health">link to the BANGIN' article</a>
    <br/>
    <br/>
    <h2>7 Healthy Habits for a Healthy Life</h2>
    <p>It’s a truism that most of us want to live long, happy, successful, and healthy lives. Unfortunately, in our pursuit of success we often take shortcuts with our health—and wind up suffering from various ailments and disabilities that we could have avoided.</p>
    <a href="https://www.livingmagazine.net/7-healthy-habits-healthy-life/">link to the BANGIN' article</a>
    <form action="/page-4/">
        Personal BANGIN' Recommendation:
        <br />
        <input type="text" value="title:"></input>
        <input type="text" value="summary:"></input>
        <input type="text" value="resource:"></input>
        <input type="submit" value="submit"/>
    </form>
</div>
)

export default FourthPage