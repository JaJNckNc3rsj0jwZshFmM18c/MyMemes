import React, { Component } from "react";

import MemeVideos, { GET_TOAPI } from "./MemeVideos.js";
import AjaxPost from "./AjaxPost.js";
import UploadButton from "./UploadButton";
import Tenor_Gif from "./Tenor_Gif.js";
import WrappedAjax from "./WrappedAjax.js";

export class MemePost extends Component {
    
   Pushing_Objects = [];
  
  constructor() {

    super();

  this.myRef = React.createRef();

    
    
  this.observeRef = React.createRef();

  this.observer = new IntersectionObserver( (entries, observer) => {entries.forEach(entry =>{
        
        
        
        
      
    if(entries[0].isIntersecting === true )
    {

      console.log(this.state.pagenum)
      console.log("h")
      this.setState(prevState => ({
        pagenum: prevState.pagenum + 1
      }));
      
    }
    
    });});
    

    this.state = {
      Post_Value: "",
      Descriptions: "",
      display: "",
      Sent: false,
      picture: null,
      Pictures: null,
      Gifs: null,
      changing_name: "",
      Personal_Ajax: [],
      Peronal_Ajax2:[],
      pagenum: 1,
  
      Checker_image: false,
    };
  }

  
    

  
  componentDidMount() {
   
    
    
    fetch(
      "http://127.0.0.1:8000/api/lead/?page=1",

      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
         


       


        const Get_Array = myJson.results.map((x) => {
         


          
          if (x.Pictures_file !== null) {
           
            this.Pushing_Objects.push([
              { display: "block" },
              x.descriptions,
              x.Pictures_file,
              true,
            ]);
           
            
          } else if (x.GIFS_String !== null) {
            this.Pushing_Objects.push([
              { display: "block" },
              x.descriptions,
              x.GIFS_String,
            ]);
          } else if (x.Videos_file !== null) {
            this.Pushing_Objects.push([
              { display: "block" },
              x.descriptions,
              x.GIFS_String,
              false,
            ]);
          }
        });

        {console.log(this.Pushing_Objects)}
        this.setState({
          Personal_Ajax: this.state.Personal_Ajax.concat(this.Pushing_Objects),
        });
      });


      
    
      
         

      
      
  
    
    



  }

  

    
    
  setRef = el => {
    console.log("set ref");
    this.myRef.current = el;
    this.startObserving();
  };

  startObserving = () => {
    if (this.myRef.current !== this.observeRef.current) {
      console.log("observing el: ", this.myRef.current);
      this.observeRef.current = this.myRef.current;
      this.observer.observe(this.observeRef.current);
    }
  };
  



  componentWillUnmount()
  {

 console.log("hello componentWillinMoid")
 this.observer.unobserve(this.myRef.current)


    
  }

  componentDidUpdate(prevprops, prevState) {



    
    if (prevState.picture !== this.state.picture) {
      
        console.log(this.state.picture);
      
        
      this.Ajax_Posts_True();
    }


    

    if(prevState.pagenum  !== this.state.pagenum)
    {

       console.log("page 2 ")
      fetch(
        "http://127.0.0.1:8000/api/lead/?page="+ this.state.pagenum ,
  
        {
          method: "GET",
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
           
            
  
         
  
  
          const Get_Array = myJson.results.map((x) => {
           
  
  
            
            if (x.Pictures_file !== null) {
             
              this.Pushing_Objects.push([
                { display: "block" },
                x.descriptions,
                x.Pictures_file,
                true,
              ]);
             
              
            } else if (x.GIFS_String !== null) {
              this.Pushing_Objects.push([
                { display: "block" },
                x.descriptions,
                x.GIFS_String,
              ]);
            } else if (x.Videos_file !== null) {
              this.Pushing_Objects.push([
                { display: "block" },
                x.descriptions,
                x.GIFS_String,
                false,
              ]);
            }
          });
  
          {console.log(this.Pushing_Objects)}
          this.setState({
            Personal_Ajax: this.state.Personal_Ajax.concat(this.Pushing_Objects),
          });
        });
  




    }

    if (this.state.Sent === true) {
      const formData = new FormData();
      formData.append(this.state.changing_name, this.state.Pictures);
      formData.append("descriptions", this.state.Post_Value);

      console.log(this.state.Personal_Ajax[4])

      fetch(
        "http://127.0.0.1:8000/api/pictures/",

        {
          method: "POST",

          body: formData,
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.setState({
            Descriptions: myJson.descriptions,
            picture: myJson[this.state.changing_name],
            display: "block",
            Sent: false,
          });

          console.log(this.state.Checker_image);
        });
    }
  }

  Post_TOAPI = (event) => {




    
  
    event.preventDefault();

    try {
      if (
        this.state.Pictures.match("https://media.tenor.com/image")[0] ===
        "https://media.tenor.com/image"
      ) {
        this.setState({ changing_name: "GIFS_String", Sent: true,  });
      }
    } catch (error) {
      this.setState({ changing_name: "Pictures_file", Sent: true, });
    }

    if (this.state.Checker_image === false) {
      this.setState({ changing_name: "Videos_file", Sent: true,  });
    }
  };

  Change_PostValue = (event) => {
    this.setState({ Post_Value: event.target.value });
  };

  Post_pic = (picture) => {
    if (picture.path.match(".png")) {
      console.log("Image");
      this.setState({ Pictures: picture, Checker_image: true });
    } else {
      console.log("Video");
      this.setState({ Pictures: picture, Checker_image: false });
    }
  };

  Ajax_Posts_True = () => {
    var array_z = [
      [
        { display: "block" },
        this.state.Descriptions,
        this.state.picture,
        this.state.Checker_image,
      ],
    ];



      
    this.setState(prev => ({
      Personal_Ajax: [ ...array_z, ...prev.Personal_Ajax ]
    }));


    

    /*
  this.setState((state) => ({
    Personal_Ajax: this.state.Peronal_Ajax.concat(array_z),
    Sent: false,
  }));*/
  };

  Gifs_1 = () => {
    this.setState({ Gifs: <Tenor_Gif Files_Gif={this.Post_pic} /> });
    fetch(
      "http://127.0.0.1:8000/api/lead/?page="+ this.state.pagenum ,

      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
         


       


        const Get_Array = myJson.results.map((x) => {
         


          
          if (x.Pictures_file !== null) {
           
            this.Pushing_Objects.push([
              { display: "block" },
              x.descriptions,
              x.Pictures_file,
              true,
            ]);
           
            
          } else if (x.GIFS_String !== null) {
            this.Pushing_Objects.push([
              { display: "block" },
              x.descriptions,
              x.GIFS_String,
            ]);
          } else if (x.Videos_file !== null) {
            this.Pushing_Objects.push([
              { display: "block" },
              x.descriptions,
              x.GIFS_String,
              false,
            ]);
          }
        });

        {console.log(this.Pushing_Objects)}
        this.setState({
          Personal_Ajax: this.state.Personal_Ajax.concat(this.Pushing_Objects),
        });
      });
  };

  
 
  
 
  render() {
    
    return (


   

      
      <div>
        
        {this.state.Gifs}

        {this.state.Personal_Ajax ==! null ? (

          
          <div>Loadingssssss...</div>
        ) : (
          <ul>
            {this.state.Personal_Ajax.map((item, i) => (
              
                <li className="spacings" key={i}>
                  <WrappedAjax 
                    ImageOrVideo={item[3]}
                    Descriptionss={item[1]}
                    style={item[0]}
                    Picturess={item[2]}
                  />
                </li>
            
            ))}
          </ul>
        )}
       
        <div ref={this.setRef}></div>
           

         
      

        

        <div className="MakingPosts">
          <form onSubmit={this.Post_TOAPI}>
            <input
              type="text"
              onChange={this.Change_PostValue}
              value={this.state.Post_Value}
              placeholder=" What are you going to talk about?"
              className="writing "
            ></input>

            <UploadButton Files_pictures={this.Post_pic} />
            <input className="Send" type="submit" value="Submit" />
          </form>

          <div className="profile-Pic"></div>

          <button onClick={this.Gifs_1} className="gif">
            <p className="GIF-text">GIF</p>
          </button>
          <div className="Upload">Upload</div>
          {/*<div className="Send"> Send </div>*/}
        </div>
      </div>
    );
  }
}

export default MemePost;