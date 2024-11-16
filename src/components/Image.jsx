const Image = ({ image }) => {
    const { imageUrl, name, className } = image;

    return (
        <img src={imageUrl} alt={`${name} Pizza`} className={className}/>
    );
}

export default Image;
