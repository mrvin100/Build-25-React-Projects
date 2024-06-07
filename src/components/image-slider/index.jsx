import { useEffect, useState } from "react"

export default function ImageSlider({ url, page = 1, limit = 5 }) {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== "") fetchImages(url)
    }, [url])

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>
    }
    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }
    return (
        <section className="image_slider container">
            <h2 className="heading">image slider</h2>
            <div className="slider_container">
                <i className="bx bx-left-arrow-alt" onClick={handlePrevious}></i>
                {
                    images && images.length ?
                        images.map((image, index) => (
                            <img
                                key={image.id}
                                alt={image.download_url}
                                src={image.download_url}
                                className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
                            />
                        ))
                        : null
                }
                <i className="bx bx-right-arrow-alt" onClick={handleNext}></i>
                <div className="circle-indicators">
                    {
                        images && images.length
                            ? images.map((_, index) => (
                                <button
                                    key={index}
                                    className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'}
                                    onClick={() => setCurrentSlide(index)}
                                ></button>
                            ))
                            : null
                    }
                </div>
            </div>
        </section>
    )
}