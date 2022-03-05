import React, { useEffect } from "react";
import "./style.css";

function FloorplanDiagram(props) {
    const { bins } = props;
    const binA1 = document.getElementById("A1");
    const binA2 = document.getElementById("A2");
    const binB1 = document.getElementById("B1");
    const binB2 = document.getElementById("B2");
    const binB3 = document.getElementById("B3");
    const binB4 = document.getElementById("B4");
    const binC1 = document.getElementById("C1");
    const binC2 = document.getElementById("C2");
    const binC3 = document.getElementById("C3");
    const binC4 = document.getElementById("C4");
    const binD1 = document.getElementById("D1");
    const binD2 = document.getElementById("D2");

    useEffect(() => {
        updateBinColors();
    });

    function updateBinColors() {
        if (bins && bins.A1 !== "") {
            binA1.style.fill = "#8AAABB";
        }
        if (bins && bins.A1 === "") {
            binA1.style.fill = "white";
        }
        if (bins && bins.A2 !== "") {
            binA2.style.fill = "#8AAABB";
        }
        if (bins && bins.A2 === "") {
            binA2.style.fill = "white";
        }
        if (bins && bins.B1 !== "") {
            binB1.style.fill = "#8AAABB";
        }
        if (bins && bins.B1 === "") {
            binB1.style.fill = "white";
        }
        if (bins && bins.B2 !== "") {
            binB2.style.fill = "#8AAABB";
        }
        if (bins && bins.B2 === "") {
            binB2.style.fill = "white";
        }
        if (bins && bins.B3 !== "") {
            binB3.style.fill = "#8AAABB";
        }
        if (bins && bins.B3 === "") {
            binB3.style.fill = "white";
        }
        if (bins && bins.B4 !== "") {
            binB4.style.fill = "#8AAABB";
        }
        if (bins && bins.B4 === "") {
            binB4.style.fill = "white";
        }
        if (bins && bins.C1 !== "") {
            binC1.style.fill = "#8AAABB";
        }
        if (bins && bins.C1 === "") {
            binC1.style.fill = "white";
        }
        if (bins && bins.C2 !== "") {
            binC2.style.fill = "#8AAABB";
        }
        if (bins && bins.C2 === "") {
            binC2.style.fill = "white";
        }
        if (bins && bins.C3 !== "") {
            binC3.style.fill = "#8AAABB";
        }
        if (bins && bins.C3 === "") {
            binC3.style.fill = "white";
        }
        if (bins && bins.C4 !== "") {
            binC4.style.fill = "#8AAABB";
        }
        if (bins && bins.C4 === "") {
            binC4.style.fill = "white";
        }
        if (bins && bins.D1 !== "") {
            binD1.style.fill = "#8AAABB";
        }
        if (bins && bins.D1 === "") {
            binD1.style.fill = "white";
        }
        if (bins && bins.D2 !== "") {
            binD2.style.fill = "#8AAABB";
        }
        if (bins && bins.D2 === "") {
            binD2.style.fill = "white";
        }
    }


    return (
        <div className="container-svg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="115%"
                height="90%"
                viewBox="-5 0 970 460"
                {...props}
            >
                <path fill="#EAF4F4" pointerEvents="all" d="M0 0h830v470H0z" />
                <path
                    stroke="#000"
                    pointerEvents="all"
                    d="M518.24 350h-28.23v-5h28.23z"
                />
                <path
                    d="M490.01 345c0-7.49 2.97-14.67 8.27-19.96a28.19 28.19 0 0119.96-8.27V345"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={10}
                    pointerEvents="all"
                />
                <path
                    fill="#fff"
                    stroke="#000"
                    pointerEvents="all"
                    d="M480 350h200v60H480z"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 198,
                                height: 1,
                                paddingTop: 380,
                                marginLeft: 481,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 1.2,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    <font>{"Offices"}</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={580}
                        y={385}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"Offices"}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M600 100h80v20h-80z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 110,
                                marginLeft: 640,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 1.2,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"Out"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={640}
                        y={115}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"Out"}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M590 280h90v20h-90z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 290,
                                marginLeft: 635,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 1.2,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"In"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={635}
                        y={295}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"In"}
                    </text>
                </switch>
                <path
                    fill="#fff"
                    stroke="#000"
                    pointerEvents="all"
                    d="M70.13 204.65v65.49h-5v-65.49z"
                />
                <path
                    d="M70.13 237.39h-5m0 0c-8.68 0-17.01-3.44-23.15-9.59a32.712 32.712 0 01-9.6-23.15h32.75m0 32.74c-18.08 0-32.75 14.67-32.75 32.75h32.75"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={10}
                    pointerEvents="all"
                />
                <path
                    d="M360 420H70V320h10v90h280zM360 50h330v180h-10V60H360z"
                    stroke="#000"
                    strokeMiterlimit={10}
                    pointerEvents="all"
                />
                <path
                    d="M70 150V50h320v10H80v90zM690 230v190H340v-10h340V230z"
                    stroke="#000"
                    strokeMiterlimit={10}
                    pointerEvents="all"
                />
                <path stroke="#000" pointerEvents="all" d="M80 240v80H70v-80z" />
                <path stroke="#000" pointerEvents="all" d="M80 150v100H70V150z" />
                <path
                    fill="#fff"
                    stroke="#000"
                    pointerEvents="all"
                    d="M530 170h80v60h-80z"
                />
                <path
                    d="M578.57 188v30h14.29m-45.72-15h28.57L570 182h-11.43v21"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={10}
                    pointerEvents="all"
                />
                <ellipse
                    cx={552.86}
                    cy={212}
                    rx={5.714}
                    ry={6}
                    fill="none"
                    stroke="#000"
                    pointerEvents="all"
                />
                <ellipse
                    cx={570}
                    cy={212}
                    rx={5.714}
                    ry={6}
                    fill="none"
                    stroke="#000"
                    pointerEvents="all"
                />
                <path
                    fill="#fff"
                    stroke="#000"
                    pointerEvents="all"
                    d="M240 340h80v60h-80z"
                />
                <path
                    d="M288.57 358v30h14.29m-45.72-15h28.57L280 352h-11.43v21"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={10}
                    pointerEvents="all"
                />
                <ellipse
                    cx={262.86}
                    cy={382}
                    rx={5.714}
                    ry={6}
                    fill="none"
                    stroke="#000"
                    pointerEvents="all"
                />
                <ellipse
                    cx={280}
                    cy={382}
                    rx={5.714}
                    ry={6}
                    fill="none"
                    stroke="#000"
                    pointerEvents="all"
                />
                <path fill="none" pointerEvents="all" d="M809 90h-99v51h99z" />
                <ellipse
                    cx={723.82}
                    cy={132.81}
                    rx={8.167}
                    ry={8.185}
                    transform="matrix(-1 0 0 1 1519 0)"
                    pointerEvents="all"
                />
                <ellipse
                    cx={785.76}
                    cy={132.81}
                    rx={8.167}
                    ry={8.185}
                    transform="matrix(-1 0 0 1 1519 0)"
                    pointerEvents="all"
                />
                <path d="M776.96 90v32.3H710V90z" pointerEvents="all" />
                <path
                    d="M739.58 124.57h41.63V98l21.42 1.64s4.69 11.75 6.37 15.87V130.73c0 1.15-.93 2.07-2.06 2.07h-1.42c0-5.76-4.63-10.43-10.33-10.43-5.71 0-10.33 4.67-10.33 10.43h-41.27c-.01-3.34-1.58-6.32-4.01-8.23zm49.89-10.9l16.48 2.09-4.77-12.48-11.72-.9v11.29zM710.05 124.57h16.86a10.468 10.468 0 00-4.01 8.24h-6.69l-6.18-2.2.02-6.04z"
                    pointerEvents="all"
                />
                <path fill="none" pointerEvents="all" d="M809 270h-99v51h99z" />
                <ellipse
                    cx={723.82}
                    cy={312.81}
                    rx={8.167}
                    ry={8.185}
                    transform="matrix(-1 0 0 1 1519 0)"
                    pointerEvents="all"
                />
                <ellipse
                    cx={785.76}
                    cy={312.81}
                    rx={8.167}
                    ry={8.185}
                    transform="matrix(-1 0 0 1 1519 0)"
                    pointerEvents="all"
                />
                <path d="M776.96 270v32.3H710V270z" pointerEvents="all" />
                <path
                    d="M739.58 304.57h41.63V278l21.42 1.64s4.69 11.75 6.37 15.87V310.73c0 1.15-.93 2.07-2.06 2.07h-1.42c0-5.76-4.63-10.43-10.33-10.43-5.71 0-10.33 4.67-10.33 10.43h-41.27c-.01-3.34-1.58-6.32-4.01-8.23zm49.89-10.9l16.48 2.09-4.77-12.48-11.72-.9v11.29zM710.05 304.57h16.86a10.468 10.468 0 00-4.01 8.24h-6.69l-6.18-2.2.02-6.04z"
                    pointerEvents="all"
                />
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M120 80h180v30H120z"
                    // Target A1 bin
                    id="A1"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 95,
                                marginLeft: 121,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={12}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    <font fontSize={16}>{"A-1"}</font>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={210}
                        y={99}
                        fontFamily="Helvetica"
                        fontSize={12}
                        textAnchor="middle"
                    >
                        {"A-1"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M120 110h180v30H120z"
                    // Target B1
                    id="B1"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 125,
                                marginLeft: 121,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"B-1"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={210}
                        y={130}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"B-1"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M300 80h180v30H300z"
                    // Target A2
                    id="A2"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 95,
                                marginLeft: 301,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"A-2"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={390}
                        y={100}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"A-2"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M300 110h180v30H300z"
                    // Target B2
                    id="B2"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 125,
                                marginLeft: 301,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"B-2"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={390}
                        y={130}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"B-2"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M120 170h180v30H120z"
                    // Target B3
                    id="B3"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 185,
                                marginLeft: 121,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"B-3"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={210}
                        y={190}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"B-3"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M120 200h180v30H120z"
                    // Target C1
                    id="C1"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 215,
                                marginLeft: 121,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"C-1"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={210}
                        y={220}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"C-1"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M300 170h180v30H300z"
                    // Target B4
                    id="B4"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 185,
                                marginLeft: 301,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"B-4"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={390}
                        y={190}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"B-4"}
                    </text>
                </switch>
                <path

                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M300 200h180v30H300z"
                    // Target C2
                    id="C2"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"

                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 215,
                                marginLeft: 301,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#red"
                                    pointerEvents="all"
                                >
                                    {"C-2"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={390}
                        y={220}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"C-2"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M120 260h180v30H120z"
                    // Target C3
                    id="C3"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 275,
                                marginLeft: 121,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"C-3"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={210}
                        y={280}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"C-3"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M120 290h180v30H120z"
                    // Target D1
                    id="D1"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 305,
                                marginLeft: 121,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"D-1"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={210}
                        y={310}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"D-1"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M300 260h180v30H300z"
                    // Target C4
                    id="C4"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 275,
                                marginLeft: 301,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"C-4"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={390}
                        y={280}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"C-4"}
                    </text>
                </switch>
                <path
                    fill="white"
                    stroke="#000"
                    pointerEvents="all"
                    d="M300 290h180v30H300z"
                    // Target D2
                    id="D2"
                />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 178,
                                height: 1,
                                paddingTop: 305,
                                marginLeft: 301,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "normal",
                                        wordWrap: "normal",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {"D-2"}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={390}
                        y={310}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {"D-2"}
                    </text>
                </switch>
                <path
                    fill="#fff"
                    stroke="#000"
                    pointerEvents="all"
                    d="M570 120h20v20h-20zM570 100h20v20h-20zM570 80h20v20h-20zM550 120h20v20h-20zM550 100h20v20h-20zM550 80h20v20h-20zM530 120h20v20h-20zM530 100h20v20h-20zM530 80h20v20h-20zM570 300h20v20h-20zM570 280h20v20h-20zM570 260h20v20h-20zM550 300h20v20h-20zM550 280h20v20h-20zM550 260h20v20h-20zM530 300h20v20h-20zM530 280h20v20h-20zM530 260h20v20h-20zM390 380h20v20h-20zM390 360h20v20h-20zM390 340h20v20h-20zM370 380h20v20h-20zM370 360h20v20h-20zM370 340h20v20h-20zM350 380h20v20h-20zM350 360h20v20h-20zM350 340h20v20h-20zM190 380h20v20h-20zM190 360h20v20h-20zM190 340h20v20h-20zM170 380h20v20h-20zM170 360h20v20h-20zM170 340h20v20h-20zM150 380h20v20h-20zM150 360h20v20h-20zM150 340h20v20h-20z"
                />
                <path fill="none" pointerEvents="all" d="M305 90h20v20h-20z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 100,
                                marginLeft: 315,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin A2 */}
                                    {bins ? bins.A2 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={315}
                        y={105}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {bins ? bins.A2 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M130 120h20v20h-20z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 130,
                                marginLeft: 140,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin B1 */}
                                    {bins ? bins.B1 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={140}
                        y={135}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {bins ? bins.B1 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M305 120h20v20h-20z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 130,
                                marginLeft: 315,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin B2 */}
                                    {bins ? bins.B2 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={315}
                        y={135}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {bins ? bins.B2 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M305 180h20v20h-20z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 190,
                                marginLeft: 315,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin B4 */}
                                    {bins ? bins.B4 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={315}
                        y={195}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {/* Bin B4 */}
                        {bins ? bins.B4 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M125 180h20v20h-20z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 190,
                                marginLeft: 135,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin B3 */}
                                    {bins ? bins.B3 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={135}
                        y={195}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {/* Bin B3 */}
                        {bins ? bins.B3 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M125 210h20v20h-20z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 220,
                                marginLeft: 135,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin C1 */}
                                    {bins ? bins.C1 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={135}
                        y={225}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {/* Bin C1 */}
                        {bins ? bins.C1 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M305 210h20v20h-20z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 220,
                                marginLeft: 315,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin C2 */}
                                    {bins ? bins.C2 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={315}
                        y={225}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {/* Bin C2 */}
                        {bins ? bins.C2 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M125 270h20v20h-20z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 280,
                                marginLeft: 135,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin C3 */}
                                    {bins ? bins.C3 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={135}
                        y={285}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {/* Bin C3 */}
                        {bins ? bins.C3 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M300 270h30v20h-30z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 280,
                                marginLeft: 315,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin C4 */}
                                    {bins ? bins.C4 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={315}
                        y={285}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {/* Bin C4 */}
                        {bins ? bins.C4 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M120 300h30v20h-30z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 310,
                                marginLeft: 135,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin D1 */}
                                    {bins ? bins.D1 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={135}
                        y={315}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {/* Bin D1 */}
                        {bins ? bins.D1 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M300 300h30v20h-30z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 310,
                                marginLeft: 315,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin D2 */}
                                    {bins ? bins.D2 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={315}
                        y={315}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {/* Bin D2 */}
                        {bins ? bins.D2 : ""}
                    </text>
                </switch>
                <path fill="none" pointerEvents="all" d="M130 90h20v20h-20z" />
                <switch transform="translate(-.5 -.5)">
                    <foreignObject
                        style={{
                            textAlign: "left",
                        }}
                        pointerEvents="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        overflow="visible"
                    >
                        <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                alignItems: "unsafe center",
                                justifyContent: "unsafe center",
                                width: 1,
                                height: 1,
                                paddingTop: 100,
                                marginLeft: 140,
                            }}
                            display="flex"
                        >
                            <div
                                style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                }}
                                fontSize={0}
                            >
                                <div
                                    style={{
                                        lineHeight: 0,
                                        whiteSpace: "nowrap",
                                    }}
                                    display="inline-block"
                                    fontSize={16}
                                    fontFamily="Helvetica"
                                    color="#000"
                                    pointerEvents="all"
                                >
                                    {/* Bin A1 */}
                                    {bins ? bins.A1 : ""}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <text
                        x={140}
                        y={105}
                        fontFamily="Helvetica"
                        fontSize={16}
                        textAnchor="middle"
                    >
                        {bins ? bins.A1 : ""}
                    </text>
                </switch>
            </svg>
        </div>
    );
}

export default FloorplanDiagram;