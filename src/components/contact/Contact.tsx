import { BackgroundBeams } from "../../ui/background-beams";
import github from "../../assets/images/github-mark-white.png";
import mail from "../../assets/images/noun-mail-560844.svg";
import linkedin from "../../assets/images/linkedIn-white.png";
import "./Contact.css";

function Contact() {
  function openSite(type: string) {
    if (type === "linkedin") {
      window
        ?.open("https://www.linkedin.com/in/saini-kanishk/", "_blank")
        ?.focus();
    } else if (type === "github") {
      window?.open("https://github.com/kanishksaini12", "_blank")?.focus();
    } else {
      window.location.href = `mailto:kanishk.saini12@gmail.com`;
    }
  }

  return (
    <div className="w-full h-full overflow-hidden relative flex flex-col items-center text-center px-4 md:px-20">
      <div className="flex mt-40 flex-col items-center w-full max-w-4xl text-center">
        <div className="text-4xl md:text-6xl font-bold text-blue-500">
          Get in Touch
        </div>
        <div className="mt-8 md:mt-20 text-base md:text-xl">
          Thank you for your interest in my work! Whether you have a design
          project in mind, or some questions, or just want to connect, I'd love
          to hear from you. Please feel free to reach out and I'll get back to
          you as soon as possible.
        </div>
        <div className="mt-8 md:mt-20 flex z-10 h-20 space-x-4 md:space-x-8">
          <img
            src={mail}
            className="contact-icon w-12 h-12 md:w-16 md:h-16"
            onClick={() => openSite("mail")}
          />
          <img
            src={github}
            className="contact-icon w-12 h-12 md:w-16 md:h-16"
            onClick={() => openSite("github")}
          />
          <img
            src={linkedin}
            className="contact-icon w-12 h-12 md:w-16 md:h-16 bg-white rounded-full"
            onClick={() => openSite("linkedin")}
          />
        </div>
        <div className="mt-8 md:mt-12 text-base md:text-lg">
          Living, learning, & leveling up one day at a time.
        </div>
      </div>
      <BackgroundBeams className="absolute" />
    </div>
  );
}

export default Contact;
