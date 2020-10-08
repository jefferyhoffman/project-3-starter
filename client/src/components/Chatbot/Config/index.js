import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import LinkList from '../LinkList';
import StyleOptions from "../StyleOptions/"

const config = {
  initialMessages: [createChatBotMessage('Hi, you down to slay the dragon?', {
      widget: "styleOptions",
    }),
],
widgets: [
    {
        widgetName: "styleOptions",
        widgetFunc: (props) => <StyleOptions {...props}/>
    },
    {
        widgetName: "saintGeorgeLinks",
        widgetFunc: (props) => <LinkList {...props}/>,
        props: {
            options: [
                {
                    text: "Nike Shirts",
                    url: "https://www.nike.com/w/mens-tops-t-shirts-9om13znik1",
                    id: 1,
                },
                {
                    text: "Nike Leggings",
                    url: "https://www.nike.com/w/womens-pants-tights-2kq19z5e1x6",
                    id: 2,
                },
                {
                    text: "Nike Sweatshirts",
                    url: "https://www.nike.com/w/mens-hoodies-pullovers-6riveznik1",
                    id: 3,
                },
                {
                    text: "Nike Shorts",
                    url: "https://www.nike.com/w/womens-shorts-38fphz5e1x6",
                    id: 4,
                },
                {
                    text: "GNC Protein",
                    url: "https://www.gnc.com/search?q=protein&lang=default",
                    id: 5,
                },
            ]
        }
    },
],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#dc7928",
    },
    chatButton: {
      backgroundColor: "#dc7928",
    },
  },
}

export default config