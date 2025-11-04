import Label from './Label';
import { useNavigate } from 'react-router-dom';

const Card = ({type, data}) => {
    const nav = useNavigate();
    function NavToProjDetail()
    {
        console.log(data.details_path);
        console.log(type);
        if (data.details_path.indexOf("repo/") !== -1)
            window.open(data.details_path.substr(4), '_blank');
        else if (type === 'proj')
            nav('/projects/' + data.details_path);
        else if (type === 'exp')
            nav('/experiences/' + data.details_path);
    }
    const path_to_image = "/card_images" + data.image_path;
    return ( 
    <div className='myCard'>
        <div className='imageWrapper'>
        <img height="90%" src={path_to_image} alt={data.image_path}/>
        </div>
        <div>
        <div className='title'>{data.name}</div>
        {data.tags.map((tag) => <Label text={tag}></Label>)}
        <div className='myCard_text'>{data.date}</div>
        <div className='myCard_text'>{data.summary}</div>
        {data.details_path!=="" && <div className='read_more' onClick={NavToProjDetail}>Read More →</div>}
        </div>
    </div> );
}
 
export default Card;