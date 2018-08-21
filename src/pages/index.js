import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Waypoint from 'react-waypoint'


class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 'asdfasdf'
    }
    this.setActivePage = this.setActivePage.bind(this)
  }

  setActivePage(activePage) {
    this.setState({activePage})
  }

  render() {
    return (
      <div>
        <Header siteTitle={'Active: ' + this.state.activePage} />
        { this.props.data.allWordpressPage.edges.map(({ node }) => (
          <div className={'section ' + node.slug} key={node.id} >
            <Waypoint
              onEnter={() => { this.setActivePage(node.slug); } }
              bottomOffset="20px"
              topOffset="-20px"
            />
            <div dangerouslySetInnerHTML={{ __html: node.content }}/>
          </div>
        ))}
      </div>
    )
  }
}

export const query = graphql`
  query wordPressMenuAndWordPressData {
    allWordpressPage {
      edges {
        node {
          id
          title
          content
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          name
          count
          items {
            wordpress_id
            order
            title
            object_slug
          }
        }
      }
    }
  }
`

export default IndexPage
