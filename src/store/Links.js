import LinkFactory from "@/LinkFactory.js";

const links = {
  state: {
    header:
      LinkFactory({
        link: "/",
        icon: "Logo.svg"
      }),
    footer:
      LinkFactory({
        link: "/",
        icon: "Logo_black.svg"
      }),
    other: [
      LinkFactory({
        text: "Our coffee",
        link: "/our-coffee",
      }),
      LinkFactory({
        text: "For your pleasure",
        link: "/pleasure",
      }),
      LinkFactory({
        text: "Contact us",
        link: "/contact",
      }),
    ]
  },
  getters: {
    getHeaderLinks(state) {
      return { header: state.header, other: state.other };
    },
    getFooterLinks(state) {
      return { footer: state.footer, other: state.other };
    }
  }
}

export default links;