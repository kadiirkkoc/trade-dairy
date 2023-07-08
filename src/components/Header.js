import React from "react";

export default function Header(props){
    return (
        <>
        <div className="header">
            <div className="userInfo">
                <h1 className="username">Kadir</h1>
            </div>
            <h1 className="header-title">Trade Dairy</h1>
            <h1 className="header-date">Date</h1>
            <div className="exchance"><iframe src="//www.exchangerates.org.uk/widget/ER-LRTICKER.php?w=600&s=2&mc=GBP&mbg=F0F0F0&bs=yes&bc =000044&f=verdana&fs=10px&fc=000044&lc=000044&lhc= FE9A00&vc=FE9A00&vcu=008000&vcd=FF0000& " frameBorder="0"></iframe></div> 
            
        </div>
        </>
    )
}