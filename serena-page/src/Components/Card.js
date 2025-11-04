import { useNavigate } from 'react-router-dom';

const Card = ({type, data}) => {
    const nav = useNavigate();
    function NavToProjDetail()
    {
        if (!data || !data.details_path) return;
        try {
            if (data.details_path.indexOf("repo/") !== -1)
                window.open(data.details_path.substr(4), '_blank');
            else if (data.details_path.indexOf("http") !== -1)
                window.open(data.details_path, '_blank');
            else if (type === 'proj')
                nav('/projects/' + data.details_path);
            else if (type === 'exp')
                nav('/experiences/' + data.details_path);
        } catch (e) {
            console.error(e);
        }
    }
    const path_to_image = "/card_images" + (data.image_path || '');
    return (
    <div className='myCard' role="article" aria-label={data.name}>
        <div className='imageWrapper'>
            <img src={path_to_image} alt={data.image_path || data.name} />
        </div>
        <div className='card-content'>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:8}}>
                <div>
                    <div className='title'>{data.name}</div>
                    <div className='meta-row'>
                        <div className='myCard_text'>{data.date}</div>
                    </div>
                </div>
            </div>

            <div style={{marginTop:8}}>
                <div className='myCard_text'>{data.summary}</div>
            </div>

            <div style={{marginTop:8, display:'flex', flexWrap:'wrap', gap:6}}>
                {Array.isArray(data.tags) && data.tags.map((tag, idx) => (
                    <div className='tag' key={idx}>{tag}</div>
                ))}
            </div>

            {data.details_path!=="" && <div style={{marginTop:8}}>
                <div className='read_more' onClick={NavToProjDetail} role="link" tabIndex={0}>Read More →</div>
            </div>}
        </div>
    </div> );
}

export default Card;