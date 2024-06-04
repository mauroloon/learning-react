import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'
const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  <section className="App">
  <TwitterFollowCard isFollowing userName="prueba">
    <strong>Prueba</strong>
  </TwitterFollowCard>
  <TwitterFollowCard isFollowing={false} userName="prueba" name="name" />
  </section>
)