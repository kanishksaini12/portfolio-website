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
    <div className="w-full h-full overflow-hidden relative pr-[5em] flex flex-col items-center text-center">
      <div className="flex mt-[10em] flex-col items-center  w-[35em] text-center">
        <div className="text-6xl font-bold text-blue-500">Get in Touch</div>
        <div className="mt-[5em] text-xl">
          Thank you for your interest in my work! Whether you have a design
          project in mind,or some questions , or just want to connect, I'd love
          to hear from you. Please feel free to reach out and I'll get back to
          you as soon as possible
        </div>
        <div className="mt-[5em] flex z-10 h-[5em]">
          <img
            src={mail}
            className="contact-icon"
            onClick={() => openSite("mail")}
          />
          <img
            src={github}
            className=" contact-icon"
            onClick={() => openSite("github")}
          />
          <img
            src={linkedin}
            className=" contact-icon bg-white rounded-full"
            onClick={() => openSite("linkedin")}
          />
        </div>
        <div className="mt-[3em]">
          Living, learning, & leveling up one day at a time.
        </div>
      </div>
      <BackgroundBeams className="absolute" />
    </div>
  );
}

export default Contact;
