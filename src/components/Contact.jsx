import emailjs from "@emailjs/browser";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(
    " Your message has been sent."
  );
  const [titleModal, setTitleModal] = useState("Thank you!");

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setModalMessage("Your message has been sent.");
    setTitleModal("Thank you!");
  }

  const resetStates = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  function sendEmail(e) {
    if (name === "" || email === "" || message === "") {
      console.log("yes");
      setModalMessage("Something was wrong with the Data, try again!.");
      setTitleModal("Ops!");
      return;
    } else {
      emailjs
        .sendForm(
          "service_ie1sh2t",
          "template_cva0yvv",
          e.target,
          "bsH4TvYkDrHAb8JX0"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md w-1/2 h-96 max-md:px-12 max-md:w-64 lg:ml-[10rem] md:ml-[20rem] xl:mb-0  md:mb-5">
        <form
          className="max-md:w-40"
          onSubmit={(e) => {
            sendEmail(e);
            resetStates(e);
          }}
        >
          <div className="Fm-group mb-6 ">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="user_name"
              type="text"
              id="exampleInput7"
              placeholder="Name"
              className="Fm-control block 
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            ></input>
          </div>
          <div className="Fm-group mb-6">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="user_email"
              type="email"
              className="Fm-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            ></input>
          </div>
          <div className="Fm-group mb-6">
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              name="user_message"
              className="
        Fm-control
        block
        w-full
        h-36
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFmControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>

          <button
            onClick={openModal}
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Send
          </button>
        </form>
      </div>

      {/* Ventana modal */}

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center px-4 absolute inset-0   ">
            <div className="fixed z-[-1] inset-0  opacity-80 bg-gray-500 "></div>

            <div className="bg-white rounded-lg overflow-hidden max-w-md w-full p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {titleModal}
                </h3>
              </div>
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">{modalMessage}</p>
              </div>
              <div className="text-center">
                <button
                  onClick={closeModal}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function CatGift() {
  return (
    <div className="w-1/2 ">
      <img
        src="https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/catty.gif"
        className="2xl:w-[25rem] xl:w-[23rem] lg:w-[20rem]  2xl:ml-60 xl:ml-20 md:ml-44 xl:mt-3  max-md:pt-5 max-md:ml-14"
      ></img>
    </div>
  );
}

export function ContactHi() {
  return (
    <div className="font-mono text-center   text-4xl max-md:text-2xl 2xl:mb-40 xl:mb-40 xl:mt-8 max-md:mb-10 2xl:-ml-48   xl:-ml-16  md:ml-52   2xl:pt-16 xl:pt-10 md:pt-7 max-md:pl-16 max-md:pt-2  font-bold">
      <h1>Contact me!</h1>
    </div>
  );
}
