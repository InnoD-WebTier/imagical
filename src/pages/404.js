import React from 'react'

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            links: props.data.allSitePage.edges.map((edge) => {
                return edge.node.path
            })
        }
    }

    render() {
        return (
            <div>
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
        );
    }
}

export default NotFoundPage

export const pageQuery = graphql`
    query NotFoundQuery{
        allSitePage {
            edges {
                node {
                    path
                }
            }
        }
    }
`;
