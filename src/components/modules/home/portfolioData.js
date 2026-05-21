import client1 from "assets/images/clients/client (1).svg";
import client2 from "assets/images/clients/client (2).svg";
import client3 from "assets/images/clients/client (3).svg";
import client4 from "assets/images/clients/client (4).svg";
import client5 from "assets/images/clients/client (5).svg";
import portfolio1 from "assets/images/gallery/image (1).png";
import portfolio2 from "assets/images/gallery/image (2).png";
import portfolio3 from "assets/images/gallery/image (3).png";
import huawei from "assets/images/icons/huawei.svg";

export const clients = [
  { id: 1, logo: client1, name: "Client 1" },
  { id: 2, logo: client2, name: "Client 2" },
  { id: 3, logo: client3, name: "Client 3" },
  { id: 4, logo: client4, name: "Client 4" },
  { id: 5, logo: client5, name: "Client 5" },
];

export const portfolioSlides = [
  {
    id: 1,
    image: portfolio1,
    title: "SAFF Event",
    description:
      "The SAFF event was a dynamic sports-centered activation created to celebrate Saudi football, engage fans, and spotlight national athletic talent.",
    speaker: "Mohamed Sultan",
    role: "Marketing Coordinator",
    brand: huawei,
    brandName: "HUAWEI",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Brand Launch Experience",
    description:
      "A full-scale launch built around immersive storytelling, premium production, and a guest journey designed to make the brand impossible to forget.",
    speaker: "Lina Kareem",
    role: "Brand Experience Lead",
    brand: client2,
    brandName: "Client Brand",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Corporate Celebration",
    description:
      "An elegant corporate event with stage design, atmosphere, and content moments tailored to connect leadership, teams, and partners in one experience.",
    speaker: "Ahmed Sami",
    role: "Project Supervisor",
    brand: client1,
    brandName: "Partner Client",
  },
];
