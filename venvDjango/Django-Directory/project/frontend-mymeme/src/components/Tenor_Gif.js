import React, { Component } from "react";

export class Tenor_GIF extends Component {
  constructor(props) {
    
    super(props);
    console.log(this.props)
    this.state = {
      Gif: null,
      filter: null,
      hover: false,
      Categories: [],
      Gif_Value: '',
    };
  }

  componentDidMount() {
    fetch(
      "https://api.tenor.com/v1/categories?%3Cparadmeters%3E&key=LIVDSRZULELA"
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const array_0 = [];
        const Arrays_1 = array_0.concat(myJson.tags);

        const map_1 = Arrays_1.map((x) => (
          <img src={x.image} className="Gif_box" alt="h" />
        ));
        //Fix search bar GIF.

        this.setState((prev) => ({
          Categories: prev.Categories.concat(map_1),
        }));

        //

        //this.setState({  Gif:myJson.tags[0].image,  } )
      });
  }


  
  Gif_Post = (Post_value) =>
  {
    
    console.log("hello")
    this.props.Files_Gif(Post_value)
    
}
   
  


 Search_Gif = () => 
 {



 

  const text = this.state.Gif_Value
  fetch(
    'https://api.tenor.com/v1/search?tag='+text+'&key=LIVDSRZULELA'
  )
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      const array_0 = [];
      const Arrays_1 = array_0.concat(myJson.results);

      

      //

      //this.setState({  Gif:myJson.tags[0].image,  } )
       
      const map_1 = Arrays_1.map((x) => 
     
      (
      
        


        <img  onClick={() => this.Gif_Post(x.media[0].gif.url)} src={x.media[0].gif.url} className="Gif_box" alt="h" />
      ));
      //Fix search bar GIF.

      this.setState((prev) => ({
        Categories: map_1,
      }));
    });
   


 }



  Change_GifValue = (event) => {
    this.setState({ Gif_Value: event.target.value });

    this.Search_Gif()
  };

  render() {
    

    const toggle_hover = () => {
      this.setState((prev) => ({ hover: !prev.hover }));

      if (this.state.hover == true) {
        this.setState((prev) => ({
          filter: "brightness(80%)",
          hover: !prev.hover,
        }));
      }
    };

    const { filter } = this.state;
    return (
      <div>
        <div id="Scroll_overflow" className="GIF_position">
          <input
            onChange={this.Change_GifValue}
            value={this.state.Gif_Value}
          ></input>

          <hr className="horizontal_line_Gif"></hr>

          <div>
            {/*<img  src={this.state.Categories[0]} className="Gif_box" alt="h"/>*/}

            {this.state.Categories}
          </div>
        </div>
      </div>
    );
  }
}
export default Tenor_GIF;











