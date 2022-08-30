import { avatars, uuid } from "./helpers";

const elems = [
  {
    id: "heading",
    label: "Heading",
    desc: "Create a heading text",
    icon: "FlagIcon",
    settings: {
      content: "Enter your heading text",
      tag: "h1",
    },
    styles: {
      color: "black",
      align: "left",
      property: "normal",
    },
    component: "HeadingElem",
    component_setting: "HeadingSetting",
  },
  {
    id: "feature",
    label: "Featured",
    desc: "Create a featured",
    icon: "CubeIcon",
    settings: {
      layout: 'left',
      image: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
      title: "This is a featured",
      content: "This is content of featured",
      btnText: "Read more",
      link: null,
    },
    styles: {
      align: "center",
      background: "darkgray",
      boxShadow: null,
      border: null,
      spacing: null,
      padding: 10,
    },
    component: "FeatureElem",
    component_setting: "FeatureSetting",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    desc: "Testimonials",
    icon: "ClipboardListIcon",
    settings: {
      fields: ["avatar", "title", "position", "content"],
    },
    items: renderCardItems.call(),
    styles: {
      color: "black",
      property: null,
      align: "center",
      bgColor: "#ffffff",
    },
    component: "TestimoElem",
    component_setting: "TestimoSetting",
  },
];

function renderCardItems() {
  return [
    {
      id: uuid(),
      component_setting: "SimpleTextSetting",
      avatar: avatars[1],
      title: "Join",
      position: "CEO",
      child_styles: {},
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: uuid(),
      component_setting: "SimpleTextSetting",
      avatar: avatars[2],
      title: "Steve",
      position: "CTO",
      child_styles: {},
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: uuid(),
      component_setting: "SimpleTextSetting",
      avatar: avatars[3],
      title: "Seven",
      position: "CPO",
      child_styles: {},
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
}

export default elems;
