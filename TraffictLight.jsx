import React, { useState, useEffect } from "react";
import './App.css';

export default function TraffictLight() {
    const [color, setColor] = useState("red"); // Inicia con el color rojo

    const colors = ["red", "yellow", "green"];
    let index = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            index = (index + 1) % colors.length; // Cambia al siguiente color
            setColor(colors[index]);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    }, []);

    const theButton = (color) => {
        setColor(color);
    };

    return (
        <div>
            <div className="d-flex flex-column align-items-center fondo bg-dark w-25">
                <button 
                    onClick={() => theButton("red")} 
                    className={`btn btn-danger p-5 rounded-circle ${color === "red" ? "luz" : ""}`}
                ></button>
                <button 
                    onClick={() => theButton("yellow")} 
                    className={`btn btn-warning p-5 rounded-circle ${color === "yellow" ? "luz" : ""}`}
                ></button>
                <button 
                    onClick={() => theButton("green")} 
                    className={`btn btn-success p-5 rounded-circle ${color === "green" ? "luz" : ""}`}
                ></button>
            </div>
        </div>
    );
}
