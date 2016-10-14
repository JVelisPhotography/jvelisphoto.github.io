import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "\"Roboto\", Arial, serif",
        "lineHeight": 1.8,
        "fontSize": 20,
        "background": "#f0f0f0",
        "fontWeight": "300"
    },
    "bodymenu-show": {
        "overflow": "hidden",
        "position": "fixed",
        "height": "100%",
        "width": "100%"
    },
    "fh5co-wrapper": {
        "height": "100%",
        "width": "100%",
        "overflow": "hidden"
    },
    "fh5co-wrapper > div": {
        "width": "100%",
        "height": "100%",
        "overflowY": "hidden"
    },
    "a": {
        "color": "#A7CDCC",
        "WebkitTransition": "0.5s",
        "OTransition": "0.5s",
        "transition": "0.5s"
    },
    "a:hover": {
        "textDecoration": "underline",
        "color": "#A7CDCC"
    },
    "a:focus": {
        "outline": "none"
    },
    "a:active": {
        "outline": "none"
    },
    "p": {
        "marginBottom": 1.5,
        "fontSize": 20,
        "color": "#727272",
        "fontWeight": "300",
        "fontFamily": "\"Roboto\", Arial, serif"
    },
    "span": {
        "marginBottom": 1.5,
        "fontSize": 18,
        "color": "rgba(114, 114, 114, 0.8)",
        "fontWeight": "300",
        "fontFamily": "\"Roboto\", Arial, serif"
    },
    "h1": {
        "color": "rgba(0, 0, 0, 0.8)",
        "fontFamily": "\"Roboto\", Arial, serif",
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "h2": {
        "color": "rgba(0, 0, 0, 0.8)",
        "fontFamily": "\"Roboto\", Arial, serif",
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "h3": {
        "color": "rgba(0, 0, 0, 0.8)",
        "fontFamily": "\"Roboto\", Arial, serif",
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "h4": {
        "color": "rgba(0, 0, 0, 0.8)",
        "fontFamily": "\"Roboto\", Arial, serif",
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "h5": {
        "color": "rgba(0, 0, 0, 0.8)",
        "fontFamily": "\"Roboto\", Arial, serif",
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "h6": {
        "color": "rgba(0, 0, 0, 0.8)",
        "fontFamily": "\"Roboto\", Arial, serif",
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "::-webkit-selection": {
        "color": "#fcfcfc",
        "background": "#b7c2c2"
    },
    "::-moz-selection": {
        "color": "#fcfcfc",
        "background": "#b7c2c2"
    },
    "::selection": {
        "color": "#fcfcfc",
        "background": "#b7c2c2"
    },
    "fh5co-page": {
        "position": "relative",
        "WebkitTransition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "MozTransition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "MsTransition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "OTransition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "transition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "WebkitTransform": "scale(1)",
        "MozTransform": "scale(1)",
        "MsTransform": "scale(1)",
        "OTransform": "scale(1)",
        "transform": "scale(1)",
        "background": "#fff"
    },
    "menu-show fh5co-page": {
        "WebkitTransform": "scale(0.9)",
        "MozTransform": "scale(0.9)",
        "MsTransform": "scale(0.9)",
        "OTransform": "scale(0.9)",
        "transform": "scale(0.9)"
    },
    "fh5co-main-nav": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "width": "100%",
        "height": "100%",
        "background": "rgba(0, 0, 0, 0.8)",
        "zIndex": 1002,
        "textAlign": "center",
        "visibility": "hidden",
        "opacity": 0,
        "WebkitTransition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "MozTransition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "MsTransition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "OTransition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "transition": "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "WebkitTransform": "scale(0)",
        "MozTransform": "scale(0)",
        "MsTransform": "scale(0)",
        "OTransform": "scale(0)",
        "transform": "scale(0)",
        "overflowY": "scroll"
    },
    "fh5co-main-nav fh5co-nav-toggle": {
        "position": "absolute",
        "top": 30,
        "right": 30,
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important",
        "height": 50,
        "width": 50,
        "background": "rgba(0, 0, 0, 0.1)",
        "lineHeight": 0,
        "visibility": "hidden",
        "opacity": 0,
        "WebkitBorderRadius": "50%",
        "MozBorderRadius": "50%",
        "MsBorderRadius": "50%",
        "borderRadius": "50%",
        "WebkitTransition": "0.3s",
        "OTransition": "0.3s",
        "transition": "0.3s"
    },
    "fh5co-main-nav fh5co-nav-toggle:hover": {
        "background": "rgba(0, 0, 0, 0.7)"
    },
    "fh5co-main-nav fh5co-nav-toggle i": {
        "top": "19px !important",
        "left": "0 !important",
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important",
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important",
        "lineHeight": 0,
        "textIndent": 0
    },
    "fh5co-main-nav fh5co-nav-toggleshow": {
        "visibility": "visible",
        "opacity": 1
    },
    "menu-show fh5co-main-nav": {
        "visibility": "visible",
        "opacity": 1,
        "WebkitTransform": "scale(1)",
        "MozTransform": "scale(1)",
        "MsTransform": "scale(1)",
        "OTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "fh5co-main-nav ul": {
        "textAlign": "center",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "fh5co-main-nav ul li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "fh5co-main-nav ul li a": {
        "display": "block",
        "width": "100%",
        "color": "white",
        "fontSize": 50,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "fh5co-main-nav ul li a:hover": {
        "background": "rgba(0, 0, 0, 0.4)",
        "color": "rgba(255, 255, 255, 0.8)",
        "outline": "none",
        "textDecoration": "none"
    },
    "fh5co-main-nav ul li a:active": {
        "color": "rgba(255, 255, 255, 0.8)",
        "outline": "none",
        "textDecoration": "none"
    },
    "fh5co-main-nav ul li a:focus": {
        "color": "rgba(255, 255, 255, 0.8)",
        "outline": "none",
        "textDecoration": "none"
    },
    "fh5co-table": {
        "display": "table",
        "width": "100%",
        "height": "100%"
    },
    "fh5co-table fh5co-table-cell": {
        "width": "100%",
        "height": "100%",
        "display": "table-cell",
        "verticalAlign": "middle"
    },
    "btn": {
        "textTransform": "uppercase",
        "letterSpacing": 2,
        "WebkitTransition": "0.3s",
        "OTransition": "0.3s",
        "transition": "0.3s"
    },
    "btnbtn-primary": {
        "background": "#A7CDCC",
        "color": "#fff",
        "border": "2px solid transparent !important"
    },
    "btnbtn-primary:hover": {
        "boxShadow": "none",
        "background": "#A7CDCC"
    },
    "btnbtn-primary:active": {
        "boxShadow": "none",
        "background": "#A7CDCC"
    },
    "btnbtn-primary:focus": {
        "boxShadow": "none",
        "background": "#A7CDCC"
    },
    "btn:hover": {
        "background": "#393e46 !important",
        "color": "#fff",
        "outline": "none !important"
    },
    "btn:active": {
        "background": "#393e46 !important",
        "color": "#fff",
        "outline": "none !important"
    },
    "btn:focus": {
        "background": "#393e46 !important",
        "color": "#fff",
        "outline": "none !important"
    },
    "btnbtn-default:hover": {
        "borderColor": "transparent"
    },
    "btnbtn-default:focus": {
        "borderColor": "transparent"
    },
    "btnbtn-default:active": {
        "borderColor": "transparent"
    },
    "header": {
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0
    },
    "header fh5co-navbar-brand": {
        "float": "left"
    },
    "header fh5co-navbar-brand fh5co-logo": {
        "fontSize": 35,
        "textTransform": "uppercase",
        "color": "#000",
        "fontWeight": "300"
    },
    "header fh5co-navbar-brand fh5co-logo:hover": {
        "textDecoration": "none !important",
        "color": "#000 !important"
    },
    "header fh5co-navbar-brand fh5co-logo:active": {
        "outline": "none",
        "textDecoration": "none"
    },
    "header fh5co-navbar-brand fh5co-logo:focus": {
        "outline": "none",
        "textDecoration": "none"
    },
    "fh5co-nav-toggle": {
        "cursor": "pointer",
        "textDecoration": "none",
        "float": "right",
        "zIndex": 1003,
        "position": "relative",
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "fh5co-nav-toggleactive i::before": {
        "background": "#fff",
        "top": 0,
        "WebkitTransform": "rotateZ(45deg)",
        "MozTransform": "rotateZ(45deg)",
        "MsTransform": "rotateZ(45deg)",
        "OTransform": "rotateZ(45deg)",
        "transform": "rotateZ(45deg)"
    },
    "fh5co-nav-toggleactive i::after": {
        "background": "#fff",
        "bottom": 0,
        "WebkitTransform": "rotateZ(-45deg)",
        "MozTransform": "rotateZ(-45deg)",
        "MsTransform": "rotateZ(-45deg)",
        "OTransform": "rotateZ(-45deg)",
        "transform": "rotateZ(-45deg)"
    },
    "fh5co-nav-toggledarkactive i::before": {
        "background": "#fff"
    },
    "fh5co-nav-toggledarkactive i::after": {
        "background": "#fff"
    },
    "fh5co-nav-toggle:hover": {
        "outline": "none",
        "borderBottom": "none !important"
    },
    "fh5co-nav-toggle:focus": {
        "outline": "none",
        "borderBottom": "none !important"
    },
    "fh5co-nav-toggle:active": {
        "outline": "none",
        "borderBottom": "none !important"
    },
    "fh5co-nav-toggle i": {
        "position": "relative",
        "display": "inline-block",
        "zoom": 1,
        "Display": "inline",
        "width": 30,
        "height": 2,
        "color": "#000",
        "font": "bold 14px/.4 Helvetica",
        "textTransform": "uppercase",
        "textIndent": -55,
        "background": "#000",
        "transition": "all .2s ease-out"
    },
    "menu-show fh5co-nav-toggle i": {
        "background": "#fff",
        "color": "#fff"
    },
    "fh5co-nav-toggle i::before": {
        "content": "''",
        "width": 30,
        "height": 2,
        "background": "#000",
        "position": "absolute",
        "left": 0,
        "WebkitTransition": "0.2s",
        "OTransition": "0.2s",
        "transition": "0.2s",
        "top": -7
    },
    "fh5co-nav-toggle i::after": {
        "content": "''",
        "width": 30,
        "height": 2,
        "background": "#000",
        "position": "absolute",
        "left": 0,
        "WebkitTransition": "0.2s",
        "OTransition": "0.2s",
        "transition": "0.2s",
        "bottom": -7
    },
    "menu-show fh5co-nav-toggle i::before": {
        "background": "#fff"
    },
    "menu-show fh5co-nav-toggle i::after": {
        "background": "#fff"
    },
    "fh5co-nav-toggledark i": {
        "position": "relative",
        "color": "#000",
        "background": "#000",
        "transition": "all .2s ease-out"
    },
    "fh5co-nav-toggledark i::before": {
        "background": "#000",
        "WebkitTransition": "0.2s",
        "OTransition": "0.2s",
        "transition": "0.2s"
    },
    "fh5co-nav-toggledark i::after": {
        "background": "#000",
        "WebkitTransition": "0.2s",
        "OTransition": "0.2s",
        "transition": "0.2s"
    },
    "fh5co-nav-toggle:hover i::before": {
        "top": -10
    },
    "fh5co-nav-toggle:hover i::after": {
        "bottom": -10
    },
    "fh5co-nav-toggleactive i": {
        "background": "transparent"
    },
    "fh5co-portfolio-section": {
        "paddingBottom": 5
    },
    "fh5co-intro-section": {
        "paddingBottom": 3,
        "marginBottom": 4
    },
    "fh5co-services-section": {
        "paddingBottom": 5
    },
    "fh5co-contact-section": {
        "paddingBottom": 5
    },
    "fh5co-team-section": {
        "paddingBottom": 5
    },
    "intro-heading": {
        "fontSize": 50,
        "fontWeight": "300",
        "lineHeight": 1.5,
        "marginBottom": 0
    },
    "filters": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "filters li": {
        "display": "inline-block",
        "marginRight": 20
    },
    "filters li span": {
        "display": "block",
        "textDecoration": "none",
        "cursor": "pointer",
        "color": "rgba(0, 0, 0, 0.3)"
    },
    "filters li span:hover": {
        "color": "#000 !important"
    },
    "filters li span:focus": {
        "color": "#000 !important"
    },
    "filters li spanactive": {
        "color": "#000 !important"
    },
    "portfoliolist portfolio": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "OBoxSizing": "border-box",
        "width": "33.33%",
        "display": "none",
        "float": "left",
        "overflow": "hidden"
    },
    "portfolio-wrapper": {
        "overflow": "hidden",
        "position": "relative !important",
        "cursor": "pointer",
        "height": 265
    },
    "portfolio": {
        "overflow": "hidden",
        "position": "relative",
        "zIndex": 1,
        "float": "left"
    },
    "portfolio img": {
        "maxWidth": "100%",
        "zIndex": -1,
        "position": "relative",
        "WebkitTransform": "scale(1.1)",
        "MozTransform": "scale(1.1)",
        "MsTransform": "scale(1.1)",
        "OTransform": "scale(1.1)",
        "transform": "scale(1.1)",
        "WebkitTransition": "all 600ms cubic-bezier(0.645, 0.045, 0.355, 1)",
        "transition": "all 600ms cubic-bezier(0.645, 0.045, 0.355, 1)"
    },
    "portfolio label": {
        "position": "absolute",
        "width": "100%",
        "height": 85,
        "bottom": -85,
        "WebkitTransition": "all 300ms cubic-bezier(0.645, 0.045, 0.355, 1)",
        "transition": "all 300ms cubic-bezier(0.645, 0.045, 0.355, 1)"
    },
    "portfolio label-bg": {
        "background": "#A7CDCC",
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "portfolio label-text": {
        "color": "#fff",
        "position": "relative",
        "zIndex": 500,
        "paddingTop": 5,
        "paddingRight": 8,
        "paddingBottom": 5,
        "paddingLeft": 8
    },
    "portfolio label-text a": {
        "fontSize": 16,
        "fontWeight": "normal",
        "color": "#fff",
        "display": "block",
        "marginBottom": 10,
        "marginTop": 15
    },
    "portfolio label-text a:hover": {
        "color": "#fff !important",
        "textDecoration": "none !important"
    },
    "portfolio text-category": {
        "display": "block",
        "color": "#fff",
        "fontSize": 14,
        "textTransform": "normal"
    },
    "portfolio:hover label": {
        "bottom": 0
    },
    "portfolio:hover img": {
        "WebkitTransform": "scale(1.2)",
        "MozTransform": "scale(1.2)",
        "MsTransform": "scale(1.2)",
        "OTransform": "scale(1.2)",
        "transform": "scale(1.2)"
    },
    "team-section-grid": {
        "position": "relative",
        "backgroundSize": "cover",
        "height": 450,
        "marginBottom": 30
    },
    "team-section-grid overlay-section": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "background": "rgba(0, 0, 0, 0.5)",
        "opacity": 0,
        "WebkitTransition": "0.6s",
        "OTransition": "0.6s",
        "transition": "0.6s"
    },
    "team-section-grid overlay-section h3": {
        "color": "#fff",
        "marginBottom": 10,
        "fontSize": 20,
        "textTransform": "uppercase",
        "letterSpacing": 3
    },
    "team-section-grid overlay-section p": {
        "color": "rgba(255, 255, 255, 0.8)"
    },
    "team-section-grid overlay-section pfh5co-social-icons a:hover": {
        "textDecoration": "none !important"
    },
    "team-section-grid overlay-section pfh5co-social-icons a:focus": {
        "textDecoration": "none !important"
    },
    "team-section-grid overlay-section pfh5co-social-icons i": {
        "fontSize": 32
    },
    "team-section-grid overlay-section span": {
        "color": "#fff",
        "display": "block"
    },
    "team-section-grid overlay-section desc": {
        "position": "absolute",
        "bottom": 0,
        "left": 30,
        "right": 30
    },
    "team-section-grid:hover overlay-section": {
        "opacity": 1
    },
    "fh5co-services i": {
        "fontSize": 60,
        "display": "block",
        "marginBottom": 40,
        "color": "#A7CDCC"
    },
    "fh5co-services-single fh5co-services i": {
        "fontSize": 80
    },
    "contact-info": {
        "marginBottom": 4,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "contact-info li": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "position": "relative",
        "paddingLeft": 40
    },
    "contact-info li i": {
        "position": "absolute",
        "top": 0.3,
        "left": 0,
        "fontSize": 22,
        "color": "#000"
    },
    "contact-info li a": {
        "color": "#A7CDCC"
    },
    "form-control": {
        "WebkitBoxShadow": "none",
        "MozBoxShadow": "none",
        "MsBoxShadow": "none",
        "OBoxShadow": "none",
        "boxShadow": "none",
        "border": "1px solid rgba(0, 0, 0, 0.1)",
        "fontSize": 18,
        "fontWeight": "300",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "MsBorderRadius": 0,
        "borderRadius": 0
    },
    "form-control:focus": {
        "boxShadow": "none",
        "border": "1px solid rgba(0, 0, 0, 0.8)"
    },
    "form-control:active": {
        "boxShadow": "none",
        "border": "1px solid rgba(0, 0, 0, 0.8)"
    },
    "input[type=\"text\"]": {
        "height": 50
    },
    "form-group": {
        "marginBottom": 30
    },
    "map": {
        "width": "100%",
        "height": 500,
        "position": "relative"
    },
    "footer": {
        "borderTop": "1px solid rgba(0, 0, 0, 0.06)",
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0
    },
    "footer p": {
        "fontSize": 16
    },
    "footer p:last-child": {
        "marginBottom": 0
    },
    "footer pfh5co-social-icons a:hover": {
        "textDecoration": "none !important"
    },
    "footer pfh5co-social-icons a:focus": {
        "textDecoration": "none !important"
    },
    "footer pfh5co-social-icons i": {
        "fontSize": 32
    },
    "footer social-text-align": {
        "textAlign": "right"
    },
    "heading-section": {
        "marginBottom": 3
    },
    "heading-section h2": {
        "fontSize": 40,
        "fontWeight": "300"
    },
    "heading-section h3": {
        "fontWeight": "300",
        "lineHeight": 1.5
    },
    "js animate-box": {
        "opacity": 0
    },
    "aimg": {
        "display": "block"
    }
});