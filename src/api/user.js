import React from "react";

import HostGator from "../assets/img/hostgator-logo.svg";
import Martian from "../assets/img/martian-text-logo.svg";
import Homies from "../assets/img/homies-logo.png";
import Terra from "../assets/img/terra-ats-logo.png";
import Ethereum from "../assets/img/ethereum-logo.png";

export default {
  skills: [
    { id: 0, name: "Blockchain Engineer", color: "#F76F6E" },
    { id: 1, name: "Front-end Developer", color: "#FBC07A" },
    { id: 2, name: "UI/UX Designer-ish", color: "#FCE073" },
    { id: 3, name: "Tech Enthusiast", color: "#A5F29F" },
    { id: 4, name: "Coffee Drinker", color: "#82E1F3" }
  ],
  projects: {
    coinflip: {
      id: "coinflipProjectCard",
      className: "coinflip-project-card",
      url: "https://github.com/santdeleon/coinflip",
      img: Ethereum,
      width: 50,
      text: (
        <p className="font-weight-bold m-0">
          Decentralized gambling <br /> application built on the <br /> Ethereum
          Network
        </p>
      ),
      industry: "Blockchain, Gambling & Gaming"
    },
    hostgator: {
      id: "hostgatorProjectCard",
      className: "hostgator-project-card",
      url: "https://www.hostgator.com/",
      img: HostGator,
      width: 120,
      text: (
        <p className="font-weight-bold m-0">
          Platform for entrepeuners <br /> & businesses to create,
          <br /> host & manage websites
        </p>
      ),
      industry: "Domain & Web Hosting"
    },
    terra: {
      id: "terraProjectCard",
      className: "terra-project-card",
      url: "https://www.terraats.com/",
      img: Terra,
      width: 90,
      text: (
        <p className="font-weight-bold m-0">
          Small in-house tech <br /> solution for custom <br /> software
          applications
        </p>
      ),
      industry: "Software Services & IT Solutions"
    },
    homies: {
      id: "homiesProjectCard",
      className: "homies-project-card",
      url: "#",
      img: Homies,
      width: 70,
      text: (
        <p className="font-weight-bold m-0">
          Grassroots startup helping <br /> brands get off the ground <br /> &
          sell online
        </p>
      ),
      industry: "Branding & E-Commerce"
    },
    martian: {
      id: "martianProjectCard",
      className: "martian-project-card",
      url: "http://martian.network/",
      img: Martian,
      width: 120,
      text: (
        <p className="font-weight-bold m-0">
          Blockchain solution for <br /> monetizing, distributing <br /> &
          hosting content
        </p>
      ),
      industry: "Blockchain & Content Management"
    }
  },
  technologies: {
    blockchain: {
      id: 1,
      name: "Blockchain Stack",
      tab: "Blockchain",
      tech: [
        "Solidity",
        "Web3",
        "React",
        "JavaScript",
        "HTML/CSS",
        "Chai",
        "Mocha"
      ],
      tools: [
        "Remix IDE",
        "OpenZepplin",
        "Provable",
        "Truffle Suite",
        "Ethereum mainnet and testnets"
      ]
    },
    frontend: {
      id: 2,
      name: "Front-End Stack",
      tab: "Front-end",
      tech: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Redux",
        "GatsbyJS",
        "NodeJS",
        "jQuery",
        "KnockoutJS",
        "Jest",
        "Mocha",
        "Chai",
        "SCSS",
        "PugJS",
        "Template Toolkit",
        "Bootstrap",
        "Bulma",
        "Materialize",
        "Storybook"
      ],
      tools: ["Atom Editor", "iTerm", "Yarn", "NPM"],
      additional: [
        "Jira",
        "Slack",
        "Confluence",
        "Stash/Bitbucket",
        "Google Hangouts",
        "Zoom",
        "Trello",
        "Telegram"
      ]
    },
    backend: {
      id: 3,
      name: "Backend Stack",
      tab: "Backend",
      tech: ["Java", "Perl", "VIM", "MongoDB", "Express"],
      tools: ["IntelliJ", "Spring Boot", "CPAN"]
    }
  }
};
