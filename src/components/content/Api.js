import React, { Component } from "react";
import './Api.css';

class API extends Component {
  constructor(props){
    super(props)
    this.state = {sunset:"", sunrise: ""}
  }

  shouldComponentUpdate(updatedProps, updatedState){
    console.log(updatedState)
    return true;
  }
  
  
  submit=()=> {
      let lat = document.getElementById("lat").value
      let long = document.getElementById("long").value

      fetch(`http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${long}&username=ranjith`, { method: 'GET' })
        .then(response => response.text())
        .then(result => {
          result = JSON.parse(result);
           this.setState({sunrise: result.sunrise, sunset:result.sunset})
          // let innerhtml = `<p>SUNRISE - ${result.sunrise}</p><p>SUNSET  - ${result.sunset}</p>`
          // document.getElementById("res").innerHTML = innerhtml
          console.log(result)
        })
        .catch(error => console.log('error', error));
    }
    render() {
    return (
      <div>
        <div className="form-group">
          <input type="text" placeholder="Latitude" id="lat" name="lat" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Longitude" id="long" name="long" required />
        </div>
        <button type="submit" className="login-btn" onClick={this.submit}>SUBMIT</button>
        <div id="res"><p>SUNRISE - {this.state.sunrise}</p><p>SUNSET  - {this.state.sunset}</p></div>
      </div>
    )
    
  }
};
export default API;