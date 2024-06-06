import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }
    const handleCreateRandomHexColor = () => {
        // EX: #947656
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }
    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setColor(`rgb(${r}, ${g}, ${b})`)
    }
    useEffect(() => {
        if (typeOfColor === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()
    }, [typeOfColor])
    return (
        <section className="random_color container">
            <div className="btns">
                <button onClick={() => setTypeOfColor('hex')} className="btn">Create HEX Color</button>
                <button onClick={() => setTypeOfColor('rgb')} className="btn">Create RGB Color</button>
                <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} className="btn">Generate Random Color</button>
            </div>
            <div className="viewer" style={{ background: color }}> <span className="span color">{typeOfColor === "rgb" ? "Rgb" : "Hex"} Color / {color}</span></div>
        </section>
    )
}