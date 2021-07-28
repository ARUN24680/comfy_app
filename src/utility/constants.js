import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/"
  },
  {
    id: 2,
    text: "about",
    url: "/about"
  },
  {
    id: 3,
    text: "products",
    url: "/products"
  }
];
export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text:
      " Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum has been the industry"
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text:
      " Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum has been the industry"
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text:
      " Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum has been the industry"
  }
];

export const loremPgSmall = {
  lorem:
    " Lorem Ipsum is simply dummy text of the printing and typesettin Lorem Ipsum has been the industry"
};
export const loremPgBig = {
  lorem:
    "  Lorem Ipsum is simply dummy text of the printing and typesetting    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and     scrambled it to make a type specimen book."
};

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
