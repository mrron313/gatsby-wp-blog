import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default function MainMenu() {
  return (
    <div>
      <StaticQuery query={graphql`
        {
          allWpMenuItem {
            edges {
              node {
                label
                path
              }
            }
          }
        }
      `} render={props => (
        <div>
          {props.allWpMenuItem.edges.map(edge => 
            <Link to={edge.node.path}> {edge.node.label} </Link>
          )}
        </div>
      )} />
    </div>
  )
}
