import React, { Component } from "react";

import MemeVideos, { GET_TOAPI } from "./MemeVideos.js";
import AjaxPost from "./AjaxPost.js";
import UploadButton from "./UploadButton";
import Tenor_Gif from "./Tenor_Gif.js";

export class MemePost extends Component {

   Pushing_Objects = [];
  constructor() {
    super();

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

  componentDidUpdate(prevprops, prevState) {
    if (prevState.picture !== this.state.picture) {
      {
        console.log(this.state.picture);
      }

      this.Ajax_Posts_True();
    }

    if (this.state.Sent === true) {
      const formData = new FormData();
      formData.append(this.state.changing_name, this.state.Pictures);
      formData.append("descriptions", this.state.Post_Value);

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
        this.setState({ changing_name: "GIFS_String", Sent: true, Personal_Ajax: this.state.Personal_Ajax.reverse });
      }
    } catch (error) {
      this.setState({ changing_name: "Pictures_file", Sent: true, Personal_Ajax: this.state.Personal_Ajax.reverse });
    }

    if (this.state.Checker_image === false) {
      this.setState({ changing_name: "Videos_file", Sent: true, Personal_Ajax: this.state.Personal_Ajax.reverse });
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

    this.setState({ Personal_Ajax: this.state.Personal_Ajax.concat(array_z) });

    /*
  this.setState((state) => ({
    Personal_Ajax: this.state.Peronal_Ajax.concat(array_z),
    Sent: false,
  }));*/
  };

  Gifs_1 = () => {
    this.setState({ Gifs: <Tenor_Gif Files_Gif={this.Post_pic} /> });
  };

  render() {
    return (
      <div>
        {this.state.Gifs}

        {this.state.Personal_Ajax == !null   ? (

          
          <div>Loadingssssss...</div>
        ) : (
          <ul>
            {this.state.Personal_Ajax.map(function (item, i) {
              return (
                <li className="spacings" key={i}>
                  <AjaxPost
                    ImageOrVideo={item[3]}
                    Descriptionss={item[1]}
                    style={item[0]}
                    Picturess={item[2]}
                  />
                </li>
              );
            })}
          </ul>
        )}

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