import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const heading = useRef(null);
  const body = useRef(null);
  const contactSection = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),
      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [contactSection]);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });
    if (response.ok) {
      showAlert("Message sent successfully!", "success");
    } else {
      showAlert(
        "Failed to send message. Please try again later or send directly on my email: manishbhandari0444@gmail.com",
        "error"
      );
    }
  };

  function showAlert(message, type) {
    let alertContent = message;
    if (type === "error") {
      alertContent += ` <a href="mailto:manishbhandari0444@gmail.com" style="cursor: pointer; cursor: pointer;
      text-decoration: none;
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: black;
      font-size:20px;
      position: relative;">Send mail</a>`;
    }

    const alertStyle = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      backgroundColor: type === "success" ? "#2ecc71" : "#e74c3c",
      color: "#fff",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      zIndex: "9999",
      textAlign: "center",
    };

    const alertElement = document.createElement("div");
    alertElement.innerHTML = alertContent;
    Object.assign(alertElement.style, alertStyle);
    document.body.appendChild(alertElement);
    setTimeout(() => {
      alertElement.remove();
    }, 5000); // Remove the alert after 5 seconds
  }

  return (
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      <Heading title="Contact" />
      <div
        ref={contactSection}
        className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"
      >
        <div className="col-span-4">
          <h3
            ref={heading}
            className="max-w-lg translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:max-w-3xl 2xl:text-7xl"
          >
            Have an awesome idea? Let&apos;s bring it to life.
          </h3>
          <p
            ref={body}
            className="mt-4 max-w-md translate-y-10 text-body-2 text-accent-100 opacity-0 2xl:max-w-2xl 2xl:text-4xl"
          >
            I am presently unavailable for freelance engagements, but I am open
            to considering new projects commencing in July 2024.
          </p>
          <form
            name="contact"
            autoComplete="off"
            className="mt-10 font-grotesk"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
                >
                  Your email
                </label>
              </div>
              <div className="relative z-0 sm:col-span-2">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
                >
                  Your message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
            >
              <span className="relative">
                <span className="absolute bottom-2 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>

                <span className="group-hover:text-accent-400">
                  Send Message
                </span>
              </span>
            </button>
          </form>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              Contact Details
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:manishbhandari0444@gmail.com"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>manishbhandari0444@gmail.com</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              My Digital Spaces
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="https://www.facebook.com/vortexmaniss"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="simple-icons:facebook" color="#666" />
                <div className="relative">
                  <span>Facebook</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/desolate_echoes/"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="simple-icons:instagram" color="#666" />
                <div className="relative">
                  <span>Instagram</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>

              <a
                href="https://github.com/manish0444/"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:github" color="#666" />
                <div className="relative">
                  <span>Github</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/manish-bhandari-5b94192a2/"
                className="group group flex w-fit items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:linkedin" color="#666" />
                <div className="relative">
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                Kathmandu, Nepal<br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
