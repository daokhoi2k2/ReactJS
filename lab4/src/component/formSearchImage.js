import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
export default class FormSeachImage extends React.Component {
  constructor() {
    super();
    this.state = { image: [] };
    this.tk = React.createRef();
    console.log(this.tk);
  }

  searchImage = async (e) => {
    console.log(this);
    let tk = this.tk.current.value;
    let page = 1;
    let per_page = 20;
    let yourKey = "eqkeauyZGirdaCIGO2TZwiiKqp_mtPrxvVR7PWdr1PQ";
    let url = `https://api.unsplash.com/search/photos?query=${tk}&page=${page}&per_page=${per_page}&client_id=${yourKey}`;
    await axios
      .get(url)
      .then(function (res) {
        let pictures = res.data.results;
        let listPic = [];
        pictures.forEach(function (p, index) {
          console.log(p.urls.regular);
          // listPic.push(<img src={p.urls.regular} height="50" />)
          listPic.push(
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a href="https://picsum.photos/940/650?random=3">
                <figure>
                  <img class="img-fluid img-thumbnail" src={p.urls.regular} alt="Random Image" />
                </figure>
              </a>
            </div>
          );
        });
        ReactDOM.render(listPic, document.getElementById("result"));
      })
      .catch(function (error) {
        console.log("Có lỗi nè : \n", error);
      });
  };
  render() {
    const kq = (
      <div>
        <form className="col-9 m-auto mt-5">
          <input ref={this.tk} className="form-control mb-1" />
          <button type="button" onClick={this.searchImage} className="btn btn-dark">
            Search
          </button>
        </form>
        <div id="result"></div>
      </div>
    );
    return kq;
  }
}
