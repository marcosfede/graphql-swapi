import { Query } from 'react-apollo'

export default ({ children, query }) => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return null
      if (error) return 'Error'
      return children({ data })
    }}
  </Query>
)
