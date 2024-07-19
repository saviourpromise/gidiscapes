"use client";
import Image from "next/image";
import bell from "@/Images/bell.png";
import Ellipse from "@/Images/Ellipse 1.png";
import map from "@/Images/map-pin.png";
import calendar from "@/Images/calendar.png";
import home from "@/Images/home.png";
import user from "@/Images/user.png";
import search from "@/Images/search.png";
import room_pic from "@/Images/Frame 26.png";
import heart from "@/Images/heart.png";
import first_pix from "@/Images/Frame 46.png";
import second_pix from "@/Images/Frame 47.png";
import third_pix from "@/Images/Frame 48.png";
import fourth_pix from "@/Images/Frame 49.png";
import ezra from "@/Images/Ellipse 4.png";
import dami from "@/Images/Ellipse 4 (1).png";
import bright from "@/Images/Ellipse 4 (2).png";
import promise from "@/Images/Ellipse 4 (3).png";
import left_arrow from "@/Images/left arrow.png";
import right_arrow from "@/Images/right arrow.png";
import Arrow from "@/Images/Arrow 1.png";
import facebook from "@/Images/facebook.png";
import instagram from "@/Images/instagram.png";
import twitter from "@/Images/twitter.png";
import phone_call from "@/Images/phone-call.png";
import mail from "@/Images/mail.png";
import { useState } from "react";

const Home = () => {
  const toggleFavorite = () => {
    const favoriteIcon = document.getElementById("favoriteIcon");
    favoriteIcon.classList.toggle("favorited");
  };
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="bg-[#EAEAEA]">
      <header className="nwa pb-4">
        <div className="flex px-8 justify-between pt-10 pb-20 mx:flex-col">
          <p className="text-3xl font-light text text-white">GIDISCAPES</p>

          {/* desktop nav */}
          <nav
            className="flex gap-10 mt-1 text-white font-medium items-center mx:hidden justify-center"
            id="menu"
          >
            <a href="" className="custom-link">
              Home
            </a>
            <a href="#apart" className="custom-link">
              Apartment
            </a>
            <a href="#about" className="custom-link">
              About Us
            </a>
          </nav>



            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              id="buger"
              viewBox="0 0 50 50"
              onClick={() => {
                handleMenu();
              }}
              className="fill-[#fff] w-8 hidden absolute mx:block mx:left-[21rem] top-9"
            >
              <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
            </svg>
          {/* mobile nav */}
          <nav
            className={`${menu ? "show-nav" : ""}hidden gap-10 mt-1 text-white font-medium items-center mx:block mx:flex-col justify-center peter`}
            id="menu"
          >
            <div className="nav">
              <a href="" className="custom-link">
                <li>Home</li>
              </a>
              <a href="#apart" className="custom-link">
                <li>Apartment</li>
              </a>
              <a href="#about" className="custom-link">
                <li>About Us</li>
              </a>
            </div>
          </nav>



          <div className="flex gap-4 mt-1 mx:hidden">
            <div>
              <Image
                src={bell}
                alt="bell"
                style={{ width: 25, marginTop: 3 }}
              />
            </div>
            <div>
              <Image src={Ellipse} alt="Ellipse" style={{ width: 30 }} />
            </div>
          </div>
        </div>

        <p className="text-4xl mt-20 font-semibold mx:-mt-10 uppercase text-center text-white mx:text-xl">
          In a great apartment, you don&apos;t <br /> just stay where you
          belong.
        </p>
        <p className="font-medium text-white text-center mt-4 mx:font-semibold text-base mx:text-sm">
          with our highly co-operated services.
        </p>

        <div className="flex gap-4 mb-8 mt-32 mx:mt-10 px-10 justify-between papa py-4 rounded-xl mx:mx-0 mx:papa mx-12 mx:flex-col">
          <div className="relative">
            <input
              type="text"
              src=""
              alt=""
              placeholder="Enter location"
              className="pl-14 rounded-md py-1 w-[14rem]"
            />
            <Image
              src={map}
              alt="map"
              style={{ width: 15 }}
              className="absolute top-[9px] left-5"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              src=""
              alt=""
              placeholder="Check in - Check out date"
              className="pl-12 mx:pl-14 rounded-md py-1 w-[16rem]"
            />
            <Image
              src={calendar}
              alt="calendar"
              style={{ width: 15 }}
              className="absolute top-[9px] left-4 mx:left-5"
            />
          </div>

          <div className="flex bg-white mx:p-1 pl-2 mx:pl-4 mx:gap-4 mx:mr-6 gap-1 pr-2 rounded-md">
            <div className="mx:-mt-1">
              <Image
                src={home}
                alt="home"
                style={{ width: 15, marginTop: 9, marginLeft: 5 }}
              />
            </div>
            <select
              name=""
              id=""
              className="font-normal bg-inherit text-gray-400"
            >
              <option value="Type">Type of apartment</option>
              <option value="Type">Room of 1</option>
              <option value="Type">Room of 2</option>
              <option value="Type">Room of 3</option>
              <option value="Type">Room of 4</option>
              <option value="Type">Room of 5</option>
            </select>
          </div>

          <div className="flex mx:p-1 bg-white mx:pl-5 mx:gap-4 pl-2 rounded-md pr-2 gap-1">
            <div className="mx:-mt-1">
              <Image
                src={user}
                alt="user"
                style={{ width: 15, marginTop: 9 }}
              />
            </div>
            <select
              name=""
              id=""
              className="font-normal bg-inherit text-gray-400"
            >
              <option value="Type">User 1</option>
              <option value="Type">User 2</option>
              <option value="Type">User 3</option>
              <option value="Type">User 4</option>
              <option value="Type">User 5</option>
            </select>
          </div>

          <div className="relative">
            <input
              type="text"
              src=""
              alt=""
              placeholder="Search"
              className="pl-11 text-white placeholder:text-white bg-[#FBB87B] rounded-md py-1 w-[8rem]"
            />
            <Image
              src={search}
              alt="search"
              style={{ width: 20 }}
              className="absolute top-[7px] left-2"
            />
          </div>
        </div>
      </header>

      <div className="flex px-8 justify-between pt-20 pb-20 mx:flex-col mx:pt-5 mx:pb-16 mx:gap-4">
        <div className="flex flex-col gap-5">
          <p className="text-xl mx:text-lg font-semibold">
            Explore apartments near you
          </p>
          <p className="text-sm font-medium">
            Thinking of a connected living where work, play and relaxation have
            a place? <br />
            Explore our modern and vibrant apartments situated in prime
            locations across your favourite city.{" "}
          </p>
        </div>
        <p className="text-sm font-semibold underline text-[#D17D2F]">
          <a href="">View all</a>
        </p>
      </div>

      {Array(2)
        .fill(0)
        .map((_, index) => (
          <div
            className="flex px-8 gap-4 justify-between pb-10 mx:flex-col mx:px-10 mx:ml-2"
            id="apart"
            key={index}
          >
            <div className="flex flex-col gap-4">
              <Image src={room_pic} alt="room" className="w-[98%]" />
              <div className="flex gap-[11rem] ml-1">
                <div className="flex gap-2">
                  <div>
                    <Image src={map} alt="map" className="w-5 pt-[2px]" />
                  </div>
                  <p className="font-semibold">38, Lekki</p>
                </div>
                <div>
                  <Image
                    src={heart}
                    alt="heart"
                    className="favorite-icon select-none pt-[2px]"
                    id="favoriteIcon"
                    onClick={() => {
                      toggleFavorite();
                    }}
                  />
                </div>
              </div>
              <p className="text-sm ml-1">3 bedroom apartment</p>
              <p className="font-semibold ml-1">
                ₦35,000/<span className="font-normal text-xs">per night</span>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Image src={room_pic} alt="room" className="w-[98%]" />
              <div className="flex gap-[13rem] ml-1">
                <div className="flex gap-2">
                  <div>
                    <Image src={map} alt="map" className="w-5 pt-[2px]" />
                  </div>
                  <p className="font-semibold">Ikoyi</p>
                </div>
                <div>
                  <Image
                    src={heart}
                    alt="heart"
                    className="favorite-icon select-none pt-[2px]"
                    id="favoriteIcon"
                    onClick={() => {
                      toggleFavorite();
                    }}
                  />
                </div>
              </div>
              <p className="text-sm ml-1">3 bedroom apartment</p>
              <p className="font-semibold ml-1">
                ₦35,000/<span className="font-normal text-xs">per night</span>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Image src={room_pic} alt="room" className="w-[98%]" />
              <div className="flex gap-[8.5rem] mx:gap-[8.5rem] ml-1">
                <div className="flex gap-2">
                  <div>
                    <Image src={map} alt="map" className="w-5 pt-[2px]" />
                  </div>
                  <p className="font-semibold">Banana Island</p>
                </div>
                <div>
                  <Image
                    src={heart}
                    alt="heart"
                    className="favorite-icon select-none pt-[2px]"
                    id="favoriteIcon"
                    onClick={() => {
                      toggleFavorite();
                    }}
                  />
                </div>
              </div>
              <p className="text-sm ml-1">3 bedroom apartment</p>
              <p className="font-semibold ml-1">
                ₦35,000/<span className="font-normal text-xs">per night</span>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Image src={room_pic} alt="room" className="w-[98%]" />
              <div className="flex gap-[8.5rem] mx:gap-[8.5rem] ml-1">
                <div className="flex gap-2">
                  <div>
                    <Image src={map} alt="map" className="w-5 pt-[2px]" />
                  </div>
                  <p className="font-semibold">Banana Island</p>
                </div>
                <div>
                  <Image
                    src={heart}
                    alt="heart"
                    className="favorite-icon select-none pt-[2px]"
                    id="favoriteIcon"
                    onClick={() => {
                      toggleFavorite();
                    }}
                  />
                </div>
              </div>
              <p className="text-sm ml-1">3 bedroom apartment</p>
              <p className="font-semibold ml-1">
                ₦35,000/<span className="font-normal text-xs">per night</span>
              </p>
            </div>
          </div>
        ))}

      <div className="flex flex-col py-10 gap-4 items-center justify-center">
        <p className="text-xl font-semibold">A popular place to stay</p>
        <p className="font-semibold text-sm mx:text-xs">
          The most popular places to stay are presented to you.
        </p>
      </div>

      <div className="flex ml-8 gap-4 mr-8 justify-between all overflow-scroll">
        <Image
          src={first_pix}
          alt="pix"
          className="w-[24%] h-[40%] mx:w-[30%] mx:h-[45%]"
        />
        <Image
          src={second_pix}
          alt="pix"
          className="w-[24%] h-[40%] mx:w-[30%] mx:h-[45%]"
        />
        <Image
          src={third_pix}
          alt="pix"
          className="w-[24%] h-[40%] mx:w-[30%] mx:h-[45%]"
        />
        <Image
          src={fourth_pix}
          alt="pix"
          className="w-[24%] h-[40%] mx:w-[30%] mx:h-[45%]"
        />
        <Image
          src={first_pix}
          alt="pix"
          className="w-[24%] h-[40%] mx:w-[30%] mx:h-[45%]"
        />
        <Image
          src={second_pix}
          alt="pix"
          className="w-[24%] h-[40%] mx:w-[30%] mx:h-[45%]"
        />
        <Image
          src={third_pix}
          alt="pix"
          className="w-[24%] h-[40%] mx:w-[30%] mx:h-[45%]"
        />
        <Image
          src={fourth_pix}
          alt="pix"
          className="w-[24%] h-[40%] mx:w-[30%] mx:h-[45%]"
        />
      </div>

      <div
        className="flex flex-col pt-20 py-10 gap-4 items-center justify-center"
        id="about"
      >
        <p className="text-xl text-center mx:text-lg font-semibold">
          What our customers have to say about us.
        </p>
        <p className="font-semibold mx:text-xs text-sm text-center">
          We help you stay comfortably and do your best to enjoy your apartment.
          see what we&apos;ve done <br /> and what they have to say about our
          work.
        </p>
      </div>

      <div className="flex px-8 pt-10 mx:gap-8 pb-40 justify-between mx:pt-0 mx:flex-col mx:pb-20">
        <div>
          <Image
            src={left_arrow}
            alt="left"
            className="mt-28 cursor-pointer mx:hidden"
          />
        </div>
        <div className="flex flex-col gap-12 px-4 py-4 rounded-3xl mx:pl-6 shadow-2xl bg-white">
          <div className="flex gap-6">
            <Image src={ezra} alt="ezra" />
            <div className="flex flex-col mt-[10px]">
              <p className="text-base font-semibold">Benard Ezra</p>
              <p className="text-xs font-normal">Founder of loop.studio</p>
            </div>
          </div>

          <p className="text-[10px] leading-4 mx:text-[13px] mx:leading-4 font-semibold">
            &quot;Lorem ipsum dolor sit amet consectetur. <br /> Tempus eget at
            purus rhoncus est ac diam. <br /> Donec massa sed faucibus duis. Dui
            odio <br /> pharetra diam consectetur. Dapibus non et <br />{" "}
            ultrices non est convallis. Non et risus orci <br /> malesuada. Et
            habitant duis fringilla ultrices <br /> in in elit. <br />
            Dignissim non consequat imperdiet aliquet.&quot;
          </p>
        </div>

        <div className="flex flex-col gap-12 px-4 py-4 rounded-3xl mx:pl-6 shadow-2xl bg-white">
          <div className="flex gap-6">
            <Image src={dami} alt="dami" />
            <div className="flex flex-col mt-[10px]">
              <p className="text-base font-semibold">Damilola Bhadmus</p>
              <p className="text-xs font-normal">Co-founder of loop.studio</p>
            </div>
          </div>

          <p className="text-[10px] leading-4 mx:text-[13px] mx:leading-4 font-semibold">
            &quot;Lorem ipsum dolor sit amet consectetur. <br /> Tempus eget at
            purus rhoncus est ac diam. <br /> Donec massa sed faucibus duis. Dui
            odio <br /> pharetra diam consectetur. Dapibus non et <br />{" "}
            ultrices non est convallis. Non et risus orci <br /> malesuada. Et
            habitant duis fringilla ultrices <br /> in in elit. <br />
            Dignissim non consequat imperdiet aliquet.&quot;
          </p>
        </div>

        <div className="flex flex-col gap-12 px-4 py-4 rounded-3xl mx:pl-6 shadow-2xl bg-white">
          <div className="flex gap-6">
            <Image src={bright} alt="bright" />
            <div className="flex flex-col mt-[10px]">
              <p className="text-base font-semibold">Orji Bright Marvelous</p>
              <p className="text-xs font-normal">
                UI/UX designer at loop.studio
              </p>
            </div>
          </div>

          <p className="text-[10px] leading-4 mx:text-[13px] mx:leading-4 font-semibold">
            &quot;Lorem ipsum dolor sit amet consectetur. <br /> Tempus eget at
            purus rhoncus est ac diam. <br /> Donec massa sed faucibus duis. Dui
            odio <br /> pharetra diam consectetur. Dapibus non et <br />{" "}
            ultrices non est convallis. Non et risus orci <br /> malesuada. Et
            habitant duis fringilla ultrices <br /> in in elit. <br />
            Dignissim non consequat imperdiet aliquet.&quot;
          </p>
        </div>

        <div className="flex flex-col gap-12 px-4 py-4 rounded-3xl mx:pl-6 shadow-2xl bg-white">
          <div className="flex gap-6">
            <Image src={promise} alt="promise" />
            <div className="flex flex-col mt-[10px]">
              <p className="text-base font-semibold">Promise Saviour</p>
              <p className="text-xs font-normal">Frontend dev at loop.studio</p>
            </div>
          </div>

          <p className="text-[10px] leading-4 mx:text-[13px] mx:leading-4 font-semibold">
            &quot;Lorem ipsum dolor sit amet consectetur. <br /> Tempus eget at
            purus rhoncus est ac diam. <br /> Donec massa sed faucibus duis. Dui
            odio <br /> pharetra diam consectetur. Dapibus non et <br />{" "}
            ultrices non est convallis. Non et risus orci <br /> malesuada. Et
            habitant duis fringilla ultrices <br /> in in elit. <br />
            Dignissim non consequat imperdiet aliquet.&quot;
          </p>
        </div>
        <div>
          <Image
            src={right_arrow}
            alt="right"
            className="mt-28 cursor-pointer mx:hidden"
          />
        </div>
      </div>

      <footer className="bg-[#212121]">
        <section className="flex px-10 justify-between py-14 mx:flex-col mx:gap-10">
          <div className="flex flex-col gap-6">
            <p className="text-5xl font-normal text-white text">GIDISCAPES</p>
            <p className="font-normal text-white text-sm">
              Subscribe to our news letter
            </p>
            <div className="relative border-b-[1px] pb-[3px]">
              <input
                type="text"
                className="bg-inherit placeholder:text-sm text-white w-96 mx:w-[20rem]"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <div>
                <Image
                  src={Arrow}
                  alt="arrow"
                  className="w-5 absolute left-[22.5rem] mx:left-[18.5rem] top-[5px]"
                />
              </div>
            </div>
            <div className="flex gap-4 mx:gap-28">
              <div>
                <Image src={facebook} alt="media" className="w-5/6" />
              </div>
              <div>
                <Image src={instagram} alt="media" className="w-5/6" />
              </div>
              <div>
                <Image src={twitter} alt="media" className="w-5/6" />
              </div>
            </div>
          </div>

          <div className="flex gap-40 mx:gap-10">
            <div className="flex flex-col gap-[10px]">
              <p className="text-3xl font-normal text-white">Explore</p>
              <p className="text-sm font-normal text-white">Apartments</p>
              <p className="text-sm font-normal text-white">About Us</p>
              <p className="text-sm font-normal text-white">Notification</p>
              <p className="text-sm font-normal text-white">Sign up</p>
            </div>

            <div className="flex flex-col gap-4 mx:gap-8">
              <p className="text-3xl font-normal text-white">Contact</p>
              <div className="flex">
                <div>
                  <Image
                    src={phone_call}
                    alt="contact"
                    className="w-3/6 pt-[2px]"
                  />
                </div>
                <p className="text-sm font-normal text-white">08071268043</p>
              </div>
              <div className="flex">
                <div>
                  <Image
                    src={mail}
                    alt="contact"
                    className="w-3/6 mx:w-5/6 pt-[2px]"
                  />
                </div>
                <p className="text-sm font-normal text-white">
                  Gidiscapes@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <p className="text-sm text-white text-center pb-10">
          Copyright © 2023 Gidiscapes | All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
