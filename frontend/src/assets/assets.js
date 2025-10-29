import logo from "./logo";
import gmail_logo from "./gmail_logo";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import size_icon from "./size_icon.svg"
import fabric_icon from "./fabric_icon.svg"
import event_icon from "./event_icon.svg"
import color_icon from "./color_icon.svg"
import addIcon from "./addIcon.svg"
import gownIcon from "./gownIcon.svg"
import gownIconColored from "./gownIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_ai from "./main_car.png"
import banner_gown_image from "./banner_gown_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import gown_image1 from "./gown_image1.png"
import gown_image2 from "./gown_image2.png"
import gown_image3 from "./gown_image3.png"
import gown_image4 from "./gown_image4.png"

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    size_icon,
    edit_icon,
    fabric_icon,
    event_icon,
    color_icon,
    addIcon,
    gownIcon,
    gownIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_ai,
    banner_gown_image,
    gown_image1,
    upload_icon,
    user_profile,
    gown_image2,
    gown_image3,
    gown_image4
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Gowns", path: "/gowns" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add gown", path: "/owner/add-gown", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Gowns", path: "/owner/manage-gown", icon: carIcon, coloredIcon: gownIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "Alex",
  "email": "alex@gmail.com",
  "role": "owner",
  "image": user_profile, 
};

export const dummyGownData = [
  {
    "_id": "67ff5bc069c03d4e45f30b77",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "name": "Midnight Elegance",
    "image": gown_image1,
    "color": "White",
    "size": "Medium",
    "fabric": "Chiffin",
    "eventtype": "Wedding",
    "pricePerDay": 1200,
    "description": "An Wedding gown perfect for bridal weddings.",
    "isAvailable": true,
    "createdAt": "2025-04-16T07:26:56.215Z",
  },
  {
    "_id": "67ff6b758f1b3684286a2a65",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "name": "Blush Dream",
    "image": gown_image2,
    "color": "Blush Red",
    "size": "Small",
    "fabric": "Chiffon",
    "eventtype": "Prom",
    "pricePerDay": 950,
    "description": "A flowing blush red gown, ideal for prom events.",
    "isAvailable": true,
    "createdAt": "2025-04-16T08:33:57.993Z",
  },
  {
    "_id": "67ff6b9f8f1b3684286a2a68",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "name": "Baro't Saya",
    "image": gown_image3,
    "category": "Mermaid",
    "color": "White",
    "size": "Large",
    "eventype": "Traditional",
    "fabric": "Silk",
    "pricePerDay": 1500,
    "description": "A stunning Baro't saya designed to showcase Filipino Heritage.",
    "isAvailable": true,
    "createdAt": "2025-04-16T08:34:39.592Z",
  },
  {
    "_id": "68009c93a3f5fc6338ea7e34",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "name": "Pink Whisper",
    "image": gown_image4,
    "color": "Pink",
    "size": "Medium",
    "fabric": "Organza",
    "eventtype": "formal",
    "pricePerDay": 1100,
    "eventtype": "formal",
    "description": "A minimalisit pink dress perfect for formal events.",
    "isAvailable": true,
    "createdAt": "2025-04-17T06:15:47.318Z",
  }
];

export const dummyMyBookingsData = [
  {
    "_id": "68482bcc98eb9722b7751f70",
    "gown": dummyGownData[0],
    "user": "6847f7cab3d8daecdb517095",
    "owner": "6847f7cab3d8daecdb517095",
    "pickupDate": "2025-06-13T00:00:00.000Z",
    "returnDate": "2025-06-14T00:00:00.000Z",
    "status": "confirmed",
    "price": 1200,
    "createdAt": "2025-06-10T12:57:48.244Z",
  },
  {
    "_id": "68482bb598eb9722b7751f60",
    "gown": dummyGownData[1],
    "user": "6847f7cab3d8daecdb517095",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "pickupDate": "2025-06-12T00:00:00.000Z",
    "returnDate": "2025-06-12T00:00:00.000Z",
    "status": "pending",
    "price": 950,
    "createdAt": "2025-06-10T12:57:25.613Z",
  },
  {
    "_id": "684800fa0fb481c5cfd92e56",
    "gown": dummyGownData[2],
    "user": "6847f7cab3d8daecdb517095",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "pickupDate": "2025-06-11T00:00:00.000Z",
    "returnDate": "2025-06-12T00:00:00.000Z",
    "status": "pending",
    "price": 1500,
    "createdAt": "2025-06-10T09:55:06.379Z",
  },
  {
    "_id": "6847fe790fb481c5cfd92d94",
    "gown": dummyGownData[3],
    "user": "6847f7cab3d8daecdb517095",
    "owner": "6847f7cab3d8daecdb517095",
    "pickupDate": "2025-06-11T00:00:00.000Z",
    "returnDate": "2025-06-12T00:00:00.000Z",
    "status": "confirmed",
    "price": 1100,
    "createdAt": "2025-06-10T09:44:25.410Z",
  }
];


export const dummyDashboardData = {
    "totalCars": 4,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 840
}