// Square component file, for demoing react.js functionality

// importing dynamic state
import { useState } from "react";

// `Square` function returns individual square element
function Square ({ color, onEnter, onLeave }: any)
{
    // function handleMouseLeave()
    // {
    //     setColor("square ".concat("yellow"));
    // }

    // return the individual `Square` element
    // className is dynamic
    return (
        <>
            <div className={color} onMouseEnter={onEnter} onMouseLeave={onLeave}></div>
        </>
    )
}

// `Demo1` function returns the demo
export default function Demo1()
{
    // dynamic array constant for the squares
    const [squares, setSquares] = useState(Array(16).fill("square"));
    // `nextSquares` is a static copy of `squares`
    let nextSquares = squares.slice();

    // handle this somehow
    function handleMouseLeave()
    {
        let i;
        for (i=0; i<16; ++i)
        {
            console.log("left the demo");
            nextSquares[i] = "square";
            setSquares(nextSquares);
        }
    }

    // handle when the mouse enters a square
    function enter(i : any)
    {
        console.log("entered square".concat(i));
        nextSquares[i] = "square red";
        setSquares(nextSquares);
    }

    // handle when mouse leaves the square
    // NOTE: `leave(i)` IS CALLED AND FINISHED TO COMPLETION BEFORE `enter(i)` IS CALLED
    // SO WE CAN COMPLETE THIS UPDATE FIRST
    function leave(i : any)
    {
        console.log("left square".concat(i));
        nextSquares[i] = "square yellow";
        setSquares(nextSquares);
    }

    return (
        <>
            {/* all-encompassing box */}
            <div id="demo1" onMouseLeave={handleMouseLeave}>
                {/* float: left makes squares wrap nicely */}
                <Square color={squares[0]} onEnter={() => enter(0)} onLeave={() => leave(0)} />
                <Square color={squares[1]} onEnter={() => enter(1)} onLeave={() => leave(1)} />
                <Square color={squares[2]} onEnter={() => enter(2)} onLeave={() => leave(2)} />
                <Square color={squares[3]} onEnter={() => enter(3)} onLeave={() => leave(3)} />
                <Square color={squares[4]} onEnter={() => enter(4)} onLeave={() => leave(4)} />
                <Square color={squares[5]} onEnter={() => enter(5)} onLeave={() => leave(5)} />
                <Square color={squares[6]} onEnter={() => enter(6)} onLeave={() => leave(6)} />
                <Square color={squares[7]} onEnter={() => enter(7)} onLeave={() => leave(7)} />
                <Square color={squares[8]} onEnter={() => enter(8)} onLeave={() => leave(8)} />
                <Square color={squares[9]} onEnter={() => enter(9)} onLeave={() => leave(9)} />
                <Square color={squares[10]} onEnter={() => enter(10)} onLeave={() => leave(10)} />
                <Square color={squares[11]} onEnter={() => enter(11)} onLeave={() => leave(11)} />
                <Square color={squares[12]} onEnter={() => enter(12)} onLeave={() => leave(12)} />
                <Square color={squares[13]} onEnter={() => enter(13)} onLeave={() => leave(13)} />
                <Square color={squares[14]} onEnter={() => enter(14)} onLeave={() => leave(14)} />
                <Square color={squares[15]} onEnter={() => enter(15)} onLeave={() => leave(15)} />
            </div>
            demo 1: adjacent square lighting
            <br />demonstrate react.js dynamic updates
            <br />(works best with mouse)
        </>
    );
}