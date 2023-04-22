import React from "react";

let year = new Date().getFullYear();

export default function Footer(){
    return (
        <footer>
            <p>{year} Copyright ⓒ Konrad Pawelec</p>
        </footer>
        );
};