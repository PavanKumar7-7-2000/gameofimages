import React, { useEffect, useState } from "react";
import axios from "axios";
// import axio from "../../public/land.jpg";
import "./imager.css";
// import logo from "../../public/land.jpg";
function Imager() {
  const [tour, settour] = useState([
    {
      _id: 2,
      userId: 1234567896,
      img: "http://localhost:8800/img/goku.png",
      desc: "chats",
      likes: 5,
    },
    {
      _id: 3,
      userId: 12345647896,
      img: "http://localhost:8800/img/bleach.jpg",
      desc: "chats",
      likes: 5,
    },
    {
      _id: 1,
      userId: 12234567896,
      img: "http://localhost:8800/img/luffy.jpg",
      desc: "chats",
      likes: 6,
    },
  ]);
  const [chat, setchat] = useState(0);
  const [chats, setchats] = useState("");
  const arz = (ele) => {
    settour(
      tour.map((tours) => {
        if (chat === chat) {
          if (tours._id === ele._id) {
            return { ...tours, likes: tours.likes * 1 + 1 };
          } else {
            return tours;
          }
        } else {
          if (tours._id === ele._id) {
            return { ...tours, likes: tours.likes * 1 - 1 };
          } else {
            return tours;
          }
        }
      })
    );
    handel(ele);
  };
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8800/api/posts/");
        // console.log(res.data);
        settour(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [chat]);
  // const handelz = async (n) => {
  //   // console.log(n + 1);
  //   // const m = n * 1 + 1;
  //   // setchats(n * 1);
  //   setchats(chats === 0 ? n * 1 + 1 : chats + 1);
  // };
  // console.log(chats);
  const handel = async (ele) => {
    // console.log(ele._id);
    // handelz(ele.likes);
    // const filter = tour.filter((tour) => {
    //   if (ele._id === tour._id) {
    //     tour.likes = ele.likes * 1 + 1;
    //   }
    // });
    // settour(filter);

    try {
      const res = await axios.put(
        "http://127.0.0.1:8800/api/posts/" + ele._id,
        { likes: ele.likes * 1 + 1 }
      );
      console.log(res.data);
      // settour(res.data);
    } catch (err) {
      console.log(err);
    }
    // setchat(!chat);
  };
  const poster = async () => {
    console.log(chats);
    const newpost = {
      userId: 1234567896,
      img: "http://localhost:3000/img/pin.png",
      desc: chats,
      likes: tour.length,
    };
    try {
      const res = await axios.post("http://127.0.0.1:8800/api/posts/", newpost);
      // res.data
      console.log(res.data);
      // settour(res.data);
    } catch (err) {
      console.log(err);
    }
    setchat(!chat);
  };
  const handelrating = async (ele) => {
    try {
      const res = await axios.put(
        "http://127.0.0.1:8800/api/posts/" + ele._id,
        { rating: ele.rating * 1 + 1 }
      );
      console.log(res.data);
      // settour(res.data);
    } catch (err) {
      console.log(err);
    }
    setchat(!chat);
  };
  // console.log(tour);
  return (
    <div>
      {/* {tour.map((ele) => (
        <>
          <div> {ele.likes[0]}</div>
          <div> {ele.numTours}</div>
        </>
      ))}  */}
      {/* {{ tour }} */}
      {/* <button onClick={() => setchat(!chat)}>click</button> */}
      {/* <div className="parent1">
        <div className="child child0 child1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas accusantium, reiciendis inventore adipisci omnis? Tempora
          soluta voluptas expedita! Impedit ea molestiae atque minima, odio
          aliquid veritatis voluptas reiciendis maxime?
        </div>
        <div className=" child child0 child2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          doloribus, perferendis in fuga accusamus hic modi ipsum. Officiis,
          pariatur! Animi nobis suscipit officiis atque quisquam praesentium
          dolore fugiat necessitatibus illum.
        </div>
        <div className=" child child0 child3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum
          ipsa similique, culpa natus voluptatum officiis animi maiores nostrum
          dolor exercitationem doloribus, ad unde, amet officia fugiat. Ex, est
          odit?
        </div>
        <div className="child child0 child4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quia!
          Cum nostrum, magni adipisci ea quos ipsa voluptates itaque ut
          consectetur quisquam pariatur modi facere, facilis repudiandae odio
          iste. Velit!
        </div>
      </div>
      <div className="parent2">
        <div className="child child10 child5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime earum
          illo accusantium minus nulla laudantium omnis cum, dolorum tempore
          iste sapiente impedit, cupiditate blanditiis rem. Neque veniam iusto
          natus odit!
        </div>
        <div className="child child10 child6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet
          nostrum sunt neque labore nobis quaerat ratione esse repellendus
          exercitationem fuga fugit quis atque aut, veniam recusandae minima
          sapiente. Tenetur!
        </div>
        <div className="child child10 child7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          dolorem ad voluptas repellendus alias error porro, blanditiis, saepe
          at veritatis ullam! Iure nisi quo dolorem repudiandae labore inventore
          similique asperiores.
        </div>
        <div className="child child10 child8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          voluptatum error adipisci commodi, hic facilis. Iure deleniti quod,
          adipisci perferendis assumenda animi et velit porro, consectetur,
          magni vero voluptatem praesentium!
        </div>
      </div>
      <div div className="parent2">
        <div className="child child99 child9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          fugiat, molestias minus odio suscipit sunt eligendi tempore vitae
          porro inventore, adipisci ea dolores. Assumenda fugit possimus quia
          eligendi ipsa animi!
        </div>
        <div className="child child99 child10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia
          dolorum doloribus a voluptatibus quos modi quis temporibus
          exercitationem? Nobis, culpa voluptatibus harum ut voluptas
          repudiandae sed ab laborum vel.
        </div>
        <div className="child child99 child11">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          numquam odit fugiat libero, consectetur, perferendis nihil unde
          eligendi veniam deleniti, ex asperiores vitae quae quibusdam omnis
          necessitatibus. Eius, vitae doloribus.
        </div>
        <div className=" child child99 child12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum aut
          sunt accusantium quidem odit, saepe ducimus deleniti soluta minus
          incidunt est, molestiae veniam officiis magni optio repellendus nisi
          voluptatibus?
        </div>
      </div>
      <div className="cont">
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </div>
      <div className="forms">
        <form className="form-box" action="handler">
          <div>
            <label>firstname:</label>
            <input type="text" required enabled />
          </div>
          <div>
            {" "}
            <label>lastname:</label> <input type="text" required />
          </div>
          <div>
            {" "}
            <label>age:</label>{" "}
            <input type="number" min="0" max="10" required />
          </div>
          <div className="boxx">
            <label>search</label>
            <input type="tel" />
          </div>

          <div className="boxx">
            <input type="date" />
          </div>
          <div className="boxx">
            <input type="file" />
          </div>
          <div className="butt">
            {" "}
            <label>check:</label>
            <input type="checkbox" optional required enabled />
          </div>
          <div className="butt">
            {" "}
            <label>lastname:</label>
            <input type="radio" />
          </div>
          <label>submit:</label>
          <input type="submit" />
        </form>
      </div> */}
      {/* <img src="./goku.png" height="100px" width="100px" alt="" />{" "} */}
      <div className="threecontain">
        <div className="topbar">
          <input className="search" type="text" placeholder="search" />
          <div className="pro-boxes">
            {" "}
            <div className="profileboxs"></div>{" "}
            <div className="profileboxs"></div>{" "}
            <div className="profileboxs"></div>
          </div>
          <div className="profilebox"></div>
        </div>
        <div className="maincontainer">
          {" "}
          {/* <div className="middle-contain"> */}
          <div className="left-main">
            <div className="left">
              <div className="lefttop">
                {" "}
                {tour.map((ele) => {
                  return (
                    <div key={ele._id}>
                      <div className="ff" href="#">
                        {" "}
                        {ele ? ele.game : "FF"}
                      </div>
                    </div>
                  );
                })}
                {/* <a className="ff" href="#">
                  {" "}
                  FREE FIRE
                </a>
                <a className="ff" href="#">
                  {" "}
                  FREE FIRE
                </a>
                <a className="ff" href="#">
                  {" "}
                  FREE FIRE
                </a>
                <a className="ff" href="#">
                  {" "}
                  FREE FIRE */}
                {/* </a>{" "} */}
              </div>
              <div className="lefttop">
                {" "}
                <div className="ff" href="#">
                  {" "}
                  @kingdomoffreefire
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="middle-mains">
            <div className="middle-contain">
              <div className="middle">
                {/* <div className="middle-views"></div>
                <div className="middle-views"></div> */}
                <ul>
                  {" "}
                  {tour.map((ele) => {
                    return (
                      <div key={ele._id} className="middle-views">
                        <div className="middle-img-box">
                          {" "}
                          <img className="middle-img" src={ele.img} alt="img" />
                        </div>

                        <div className="desc-box">
                          <div className="desc">
                            {" "}
                            {ele.desc
                              ? ele.desc
                              : "this image belongs to moutains in night.in this image water falling forom the sky,ttthe is of colour blue humans are lloving birds are chirping this plesant envirnoment this image belongs to moutains in night.in this image water falling forom the sky,ttthe is of colour blue humans are lloving birds are chirping this plesant envirnoment"}
                          </div>
                          <div className="middle-middle">
                            {" "}
                            <div>
                              <div className="likes">LIKES</div>
                              <div
                                className="likes"
                                color="red"
                                onClick={() => arz(ele)}
                              >
                                {" "}
                                {ele.likes ? ele.likes : "0"}
                              </div>
                            </div>
                            <div>
                              {" "}
                              <div className="likes">RATING</div>
                              <div
                                color="red"
                                className="rating like"
                                onClick={() => handelrating(ele)}
                              >
                                {ele.rating ? ele.rating : "0"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ul>
                {/* {tour.map((ele, i) => {
                  return (
                    <li key={i}>
                      {" "}
                      <div className="middle-views">
                        <img
                          className="middle-img"
                          src={ele.img}
                          height="100%"
                          width="50%"
                          alt="img"
                        />
                        h
                      </div>
                    </li>
                  );
                })} */}
                {/* <div className="middle-views">
                  <img
                    className="middle-img"
                    src={tour.img}
                    height="100%"
                    width="50%"
                    alt=""
                  />
                </div> */}
              </div>{" "}
            </div>
            <div className="middle-contains">
              <input
                className="post-input"
                onChange={(e) => setchats(e.target.value)}
                type="text-area"
                value={chats}
                placeholder="add your description here to post "
              />
              <button className="post-bar" onClick={poster}>
                {" "}
                post
              </button>

              <button className="post-bar" onClick={arz}>
                {" "}
                update
              </button>
            </div>
          </div>
          <div className="right">
            <div className="right-bar"></div>
            <div className="right-bar"></div>
            <div className="right-bar"></div>
            <div className="right-bar"></div> <div className="right-bar"></div>
            <div className="right-bar"></div>
            <div className="right-bar"></div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
export default Imager;
