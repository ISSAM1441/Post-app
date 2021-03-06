import React, {useState} from 'react';
import PostCards from "../postReview/PostCards";

export const PostData = [{
    id: 1,
    title: "UK intel: Russia fired senior commanders who 'performed poorly'",
    description: "The British intelligence update also said that a culture of cover-ups and scapegoating is 'probably prevalent' within the Russian military and security system",
    author: "Missy Ryan",
    tag: "Wars",
    img: 'https://cdn.cnn.com/cnnnext/dam/assets/220430193916-destroyed-russian-tank-ukraine-large-tease.jpg',
    views: 200000,
    comments: 250,
  },
  {
    id: 2,
    title: "BMW Reveals M 1000 RR 50 Years M Anniversary Edition",
    description: "The special edition M 1000 RR gets additional standard kit over the regular model and is finished in Sao Paulo Yellow.",
    author: "NDTV",
    tag: "Covid 19",
    img: 'https://c.ndtvimg.com/2022-05/lnra3ulo_bmw-m-1000-rr-50-years-m_625x300_20_May_22.jpg',
    views: 15800000,
    comments: 20,
  },
  {
    id: 3,
    title: "ناس بتكنز الفلوس وهتموت وتسيبها .. وناس بتعمل لآخرتها ♥️",
    description: "'ساديو ماني' بطل أمم أفريقيا ونجم ليڤربول الـ بيضرب به المثل في التواضع والإنسانية بيقول : لا أري نفسي أفضل من أي شخص أنا فقط أذهب إلى هناك وأقوم بعملي بشكل جيد أشعر بالقلق باستمرار بشأن الوجبة القادمة لأهالي قريتي في السنغال لهذا السبب يجب أن أكون دائما في أفضل حالاتي في الملعب حتي لا أفقد مكاني لأنني قد أخسر عقدي أيضاً وتصبح قريتي جائعة الكرة الذهبية لا تشغل بالي.. حيث أن الفوز بالكرة الذهبية لا تُشبع الجائع !",
    author: "Ahmad Ayman",
    tag: "Culter",
    img: 'https://media-exp1.licdn.com/dms/image/C4D22AQHbtzXnOYAOEQ/feedshare-shrink_800/0/1653161053055?e=1655942400&v=beta&t=XuuC9q5ZLX8_yWoYDM6yx78H_OzYH5RB9jWxwIZoXgk',
    views: 200000,
    comments: 250,
  },
  {
    id: 4,
    title: "Mi Band 7 Launch Set for May 24, Xiaomi Teases Larger Display With Increased Viewing Area",
    description: "Xiaomi has confirmed that the Mi Band 7 will launch at the same time as Redmi Note 11T series in China on May 24. Xiaomi has also provided some details about the specifications of Mi Band 7, successor to the Mi Band 6. The Chinese company has also confirmed that Mi Band 7 will get a 1.62-inch AMOLED display with 25 percent increased viewing area.",
    author: "nasa.gov",
    tag: 'Hight Tech',
    img: 'https://i.gadgets360cdn.com/large/xiaomi_mi_band_7_launch_teaser_image_weibo_1653055873568.jpg?downsize=950:*',
    views: 85,
    comments: 0,
  },
  {
    id: 5,
    title: "Scientists Grow Plants in Moon Soil ",
    description: "For the first time ever, researchers have grown the hardy and well-studied Arabidopsis thaliana in lunar sample material.",
    author: "Missy Ryan",
    tag: "Health Care",
    img: 'https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/plants_in_soil_from_the_moon3.jpg?itok=GM9zGczl',
    views: 200000,
    comments: 250,
  },
  {
    id: 6,
    title: "New clue about why Covid is deadlier for men: Estrogen may play a protective role ",
    description: "Women who received hormone replacement therapy after getting Covid had a 78 percent lower overall mortality rate than women who didn't take estrogen, a study found.",
    author: "NBC news",
    tag: "Life Style",
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1000x500,f_auto,q_auto:best/rockcms/2022-05/220517-intensive-care-unit-covid-ew-517p-15142c.jpg',
    views: 295524800,
    comments: 5,
  },
  {
    id: 7,
    title: "Everton 'confident' FFP rules followed after Burnley & Leeds threaten action ",
    description: "Everton insist they are 'confident' they have complied with Premier League Financial Fair Play rules amid threats of legal action from Burnley and Leeds.",
    author: "Sky Sport",
    tag: "Promotion",
    img: 'https://e0.365dm.com/22/05/768x432/skysports-seamus-coleman-everton_5777230.jpg?20220519232105',
    views: 700,
    comments: 72,
  },
  {
    id: 8,
    title: "New brain-painting method being tested for ADHD treatment",
    description: "USF Assistant professor, Marvin Andujar, and his student demonstrate their brain-painting project. Credit: University of South Florida Imagine focusing on one thing so well that you can control its movement. Now, imagine mentally selecting colors and shapes to create an abstract image—a brain painting. USF computer scientist Marvin Andujar is harnessing " +
      "the power of concentration and art to develop a new brain-computer interface (BCI) prototype and help study participants use their brain like never before. The goal is to introduce a novel treatment option for individuals with Attention-Deficit/Hyperactivity Disorder (ADHD) by tapping directly into their brain activity." +
      "This type of brain-computer interaction is more of a brain exercise to improve your attention,' Andujar said. 'We're trying to see how we can narrow that focus over time." +
      "Similar to Andujar's previous work with brain-controlled drones, participants' complete attention is required. To fly forward, a user must focus on a specific movement, such as walking. Individuals from the ADHD community approached Andujar after learning how the brain-controlled drone project harnessed attention span and asked for a device they could use at home." +
      "That's why we started working on making brain painting into a tool where those with ADHD can train their attention while doing something creative," +
      "Andujar said. Andujar just wrapped up a two-year pilot study. He and his students collected data from participants who are mainly college students with ADHD who need additional help to focus throughout the semester and pass exams. The most common treatment prescribed is Adderall—a medication known to disturb eating and sleeping patterns." +
      "In the world of technology, with phone and social media, it's easy to get distracted, Andujar said. The idea of BCIs is similar to meditation practices because the mind is required to focus." +
      "Improvements are measured by how long one can hold their attention without letting their minds wander. With brain painting, users wear a BCI and focus on screen options and interact with blinking controls to paint on a blank canvas.",
    author: "University of South Florida",
    tag: "Science",
    img: 'https://scx1.b-cdn.net/csz/news/800a/2022/new-brain-painting-met.jpg',
    views: 200000,
    comments: 250,
  }];
