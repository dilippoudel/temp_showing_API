import React from 'react';
class SearchBox extends React.Component {
state = {searchTerm : ''}

handleSubmit = (event) => {
event.preventDefault();
this.props.onFormSubmit(this.state.searchTerm)
}
handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
}
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
      <div className="form-group">
        <input  
        style = {{marginTop: '10px'}} 
        type= "text" 
        className = "form-control" 
        placeholder = "Search City..."
        value = {this.state.searchTerm}
        onChange = {this.handleChange}/>
      </div>
    </form>
        )
    }
}

export default SearchBox;