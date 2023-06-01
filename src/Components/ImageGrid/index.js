import "./_image-grid.scss";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchRandomImages } from "../../Redux/Actions/customerAction";


export const ImageGrid = () => {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.images);
    console.log("images", images);

    //useEffect Hook to fetchAPI 
    useEffect(() => {
        dispatch(fetchRandomImages());
        
        const timeoutId = setInterval(() => {
            dispatch(fetchRandomImages());
        }, 10000);

        //cleanup function
        return () => {
            clearInterval(timeoutId);
        };
    }, []);


    return (
        <>
            <div className="image-container">
                <div className="image-grid">
                    {images.map((image) => (
                        <div className="image-cell">
                            <img className="image-cell-avatar" src={image.download_url} alt={image.author} />
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}