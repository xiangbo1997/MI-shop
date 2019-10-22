import React,{Component} from 'react'
import './index.less'
class Search extends Component {
  render () {
    return (
      <div>
        <form>
            <input type="text" className="search" placeholder="search" />
          </form>
      </div>
    )
  }
}

export default Search;