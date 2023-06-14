const Card = (props) => {
    const top = props.position.top;
    const left = props.position.left;

    return (
        <div className="card" style={{'top': top, 'left': left}}>
            <div className="card-image">
            <svg
                viewBox="0 0 56.547291 29.946291"
                id="diamond"
                xmlns="http://www.w3.org/2000/svg">
                <g
                    transform="translate(-54.268227,-57.769241)">
                    <path
                    d="m 57.424643,84.90848 c -0.05702,1.22595 -16.918012,16.58819 -18.143963,16.53117 -1.225951,-0.057 -16.588188,-16.918016 -16.531167,-18.143967 0.05702,-1.225951 16.918012,-16.588187 18.143963,-16.531166 1.225951,0.05702 16.588188,16.918012 16.531167,18.143963 z"
                    transform="matrix(0,0.82330165,-1.5546326,0,213.28971,39.738628)" />
                </g>
                <use href="#diamond" fill-opacity="50" fill="red" stroke="#000000" stroke-width="1.695"/>
            </svg>
            <svg
                viewBox="0 0 56.547291 29.946291"
                id="diamond"
                xmlns="http://www.w3.org/2000/svg">
                <g
                    transform="translate(-54.268227,-57.769241)">
                    <path
                    d="m 57.424643,84.90848 c -0.05702,1.22595 -16.918012,16.58819 -18.143963,16.53117 -1.225951,-0.057 -16.588188,-16.918016 -16.531167,-18.143967 0.05702,-1.225951 16.918012,-16.588187 18.143963,-16.531166 1.225951,0.05702 16.588188,16.918012 16.531167,18.143963 z"
                    transform="matrix(0,0.82330165,-1.5546326,0,213.28971,39.738628)" />
                </g>
                <use href="#diamond" fill-opacity="50" fill="red" stroke="#000000" stroke-width="1.695"/>
            </svg>
            </div>

        </div>
     );
}
 
export default Card;